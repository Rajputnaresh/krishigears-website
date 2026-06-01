from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

import os
import uuid
import logging
import bcrypt
import jwt
import asyncio
import httpx
from datetime import datetime, timezone, timedelta
from typing import List, Optional, Literal, Dict, Any

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, Query
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from contextlib import asynccontextmanager

from seed_data import PRODUCTS as SEED_PRODUCTS


# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

JWT_SECRET = os.environ['JWT_SECRET']
JWT_ALGORITHM = "HS256"
JWT_EXPIRY_HOURS = 24

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ---------- Auth helpers ----------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRY_HOURS),
        "type": "access",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


security = HTTPBearer(auto_error=False)


async def get_current_admin(credentials: Optional[HTTPAuthorizationCredentials] = Depends(security)) -> dict:
    if credentials is None:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = credentials.credentials
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
        user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        if user.get("role") != "admin":
            raise HTTPException(status_code=403, detail="Forbidden")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


async def seed_admin():
    admin_email = os.environ["ADMIN_EMAIL"].lower()
    admin_password = os.environ["ADMIN_PASSWORD"]
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "id": str(uuid.uuid4()),
            "email": admin_email,
            "password_hash": hash_password(admin_password),
            "name": "Admin",
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info("Seeded admin user: %s", admin_email)
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.users.update_one(
            {"email": admin_email},
            {"$set": {"password_hash": hash_password(admin_password)}},
        )
        logger.info("Updated admin password for %s", admin_email)


async def seed_products():
    count = await db.products.count_documents({})
    if count > 0:
        return
    docs = []
    for idx, p in enumerate(SEED_PRODUCTS):
        docs.append({
            "id": str(uuid.uuid4()),
            "slug": p["slug"],
            "category": p["category"],
            "name": p["name"],
            "model": p.get("model", ""),
            "badges": p.get("badges", []),
            "images": p.get("images", []),
            "specs": p.get("specs", {}),
            "features": p.get("features", []),
            "applications": p.get("applications", []),
            "benefits": p.get("benefits", []),
            "warranty": p.get("warranty", ""),
            "active": True,
            "featured": False,
            "sort_order": idx,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat(),
        })
    if docs:
        await db.products.insert_many(docs)
        logger.info("Seeded %d products", len(docs))


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.users.create_index("email", unique=True)
    await db.leads.create_index([("created_at", -1)])
    await db.blog_posts.create_index("slug", unique=True)
    await db.products.create_index("slug", unique=True)
    await db.products.create_index([("sort_order", 1)])
    await seed_admin()
    await seed_products()
    yield
    client.close()


app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class LoginRequest(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    access_token: str
    user: dict


class EnquiryCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    phone: str
    email: Optional[str] = None
    location: Optional[str] = None
    product: Optional[str] = None
    message: Optional[str] = None


class DealerCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    full_name: str
    phone: str
    email: Optional[str] = None
    business_name: Optional[str] = None
    city: str
    state: str
    pincode: Optional[str] = None
    years_in_business: Optional[str] = None
    current_products: Optional[str] = None
    message: Optional[str] = None


class BulkOrderCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    phone: str
    email: Optional[str] = None
    organization: Optional[str] = None
    location: Optional[str] = None
    product: str
    quantity: str
    message: Optional[str] = None


class ContactCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    phone: str
    email: Optional[str] = None
    subject: Optional[str] = None
    message: str


class BlogPostCreate(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    cover_image: Optional[str] = None
    tags: List[str] = []
    published: bool = True


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    cover_image: Optional[str] = None
    tags: Optional[List[str]] = None
    published: Optional[bool] = None


class ProductCreate(BaseModel):
    slug: str
    category: str
    name: str
    model: str = ""
    badges: List[str] = []
    images: List[str] = []
    specs: Dict[str, str] = {}
    features: List[str] = []
    applications: List[str] = []
    benefits: List[str] = []
    warranty: str = ""
    active: bool = True
    featured: bool = False
    sort_order: int = 999


class ProductUpdate(BaseModel):
    category: Optional[str] = None
    name: Optional[str] = None
    model: Optional[str] = None
    badges: Optional[List[str]] = None
    images: Optional[List[str]] = None
    specs: Optional[Dict[str, str]] = None
    features: Optional[List[str]] = None
    applications: Optional[List[str]] = None
    benefits: Optional[List[str]] = None
    warranty: Optional[str] = None
    active: Optional[bool] = None
    featured: Optional[bool] = None
    sort_order: Optional[int] = None


# ---------- Helpers ----------
def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def lead_doc(lead_type: str, payload: dict) -> dict:
    return {
        "id": str(uuid.uuid4()),
        "type": lead_type,
        "data": payload,
        "status": "new",
        "created_at": now_iso(),
    }


# ---------- Google Sheets webhook forwarder ----------
async def get_sheet_url(lead_type: str) -> str:
    """Return the configured webhook URL for a lead type.
    DB settings override environment variables so admins can update via UI.
    """
    setting = await db.settings.find_one({"key": f"gsheets_{lead_type}_url"})
    if setting and setting.get("value"):
        return setting["value"].strip()
    env_key = "GSHEETS_ENQUIRY_URL" if lead_type == "enquiry" else "GSHEETS_DEALER_URL"
    return os.environ.get(env_key, "").strip()


async def forward_to_sheet(lead_type: str, doc: dict) -> None:
    """Fire-and-forget POST of a lead to a Google Apps Script webhook.
    Silently skips when no URL is configured. Failures are logged but never
    affect the user's form-submission flow.
    """
    url = await get_sheet_url(lead_type)
    if not url:
        return
    payload = {
        "id": doc.get("id"),
        "type": doc.get("type"),
        "created_at": doc.get("created_at"),
        **(doc.get("data") or {}),
    }
    try:
        async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
            resp = await client.post(url, json=payload)
            if resp.status_code >= 400:
                logger.warning("Sheet webhook %s -> %s: %s", lead_type, resp.status_code, resp.text[:200])
    except Exception as e:  # noqa: BLE001
        logger.warning("Sheet webhook %s failed: %s", lead_type, e)


def fire_sheet_forward(lead_type: str, doc: dict) -> None:
    """Schedule the webhook call without blocking the request."""
    asyncio.create_task(forward_to_sheet(lead_type, doc))


# ---------- Public Routes ----------
@api_router.get("/")
async def root():
    return {"name": "KrishiGears API", "status": "ok"}


@api_router.post("/auth/login", response_model=LoginResponse)
async def login(req: LoginRequest):
    email = req.email.lower().strip()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(req.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(user["id"], user["email"])
    user_public = {k: v for k, v in user.items() if k not in ("_id", "password_hash")}
    return {"access_token": token, "user": user_public}


@api_router.get("/auth/me")
async def auth_me(user: dict = Depends(get_current_admin)):
    return user


@api_router.post("/leads/enquiry")
async def submit_enquiry(payload: EnquiryCreate):
    doc = lead_doc("enquiry", payload.model_dump())
    await db.leads.insert_one(doc)
    fire_sheet_forward("enquiry", doc)
    return {"success": True, "id": doc["id"]}


@api_router.post("/leads/dealer")
async def submit_dealer(payload: DealerCreate):
    doc = lead_doc("dealer", payload.model_dump())
    await db.leads.insert_one(doc)
    fire_sheet_forward("dealer", doc)
    return {"success": True, "id": doc["id"]}


@api_router.post("/leads/bulk-order")
async def submit_bulk_order(payload: BulkOrderCreate):
    doc = lead_doc("bulk-order", payload.model_dump())
    await db.leads.insert_one(doc)
    return {"success": True, "id": doc["id"]}


@api_router.post("/leads/contact")
async def submit_contact(payload: ContactCreate):
    doc = lead_doc("contact", payload.model_dump())
    await db.leads.insert_one(doc)
    return {"success": True, "id": doc["id"]}


@api_router.get("/blog")
async def list_blog():
    posts = await db.blog_posts.find({"published": True}, {"_id": 0, "content": 0}).sort("created_at", -1).to_list(200)
    return posts


@api_router.get("/blog/{slug}")
async def get_blog_post(slug: str):
    post = await db.blog_posts.find_one({"slug": slug, "published": True}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


# ---------- Public Products ----------
@api_router.get("/products")
async def list_products(category: Optional[str] = Query(default=None), featured: Optional[bool] = Query(default=None)):
    query: Dict[str, Any] = {"active": True}
    if category:
        query["category"] = category
    if featured is not None:
        query["featured"] = featured
    cursor = db.products.find(query, {"_id": 0}).sort([("sort_order", 1), ("created_at", -1)])
    return await cursor.to_list(500)


@api_router.get("/products/{slug}")
async def get_product(slug: str):
    p = await db.products.find_one({"slug": slug, "active": True}, {"_id": 0})
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    return p


# ---------- Admin Routes ----------
@api_router.get("/admin/leads")
async def admin_list_leads(
    type: Optional[str] = Query(default=None),
    user: dict = Depends(get_current_admin),
):
    query = {} if not type or type == "all" else {"type": type}
    leads = await db.leads.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return leads


@api_router.delete("/admin/leads/{lead_id}")
async def admin_delete_lead(lead_id: str, user: dict = Depends(get_current_admin)):
    result = await db.leads.delete_one({"id": lead_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    return {"success": True}


@api_router.get("/admin/blog")
async def admin_list_blog(user: dict = Depends(get_current_admin)):
    posts = await db.blog_posts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return posts


@api_router.post("/admin/blog")
async def admin_create_blog(payload: BlogPostCreate, user: dict = Depends(get_current_admin)):
    existing = await db.blog_posts.find_one({"slug": payload.slug})
    if existing:
        raise HTTPException(status_code=409, detail="Slug already exists")
    doc = {
        "id": str(uuid.uuid4()),
        **payload.model_dump(),
        "created_at": now_iso(),
        "updated_at": now_iso(),
    }
    await db.blog_posts.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.put("/admin/blog/{slug}")
async def admin_update_blog(slug: str, payload: BlogPostUpdate, user: dict = Depends(get_current_admin)):
    updates = {k: v for k, v in payload.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    updates["updated_at"] = now_iso()
    result = await db.blog_posts.update_one({"slug": slug}, {"$set": updates})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    return post


@api_router.delete("/admin/blog/{slug}")
async def admin_delete_blog(slug: str, user: dict = Depends(get_current_admin)):
    result = await db.blog_posts.delete_one({"slug": slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"success": True}


@api_router.get("/admin/stats")
async def admin_stats(user: dict = Depends(get_current_admin)):
    total = await db.leads.count_documents({})
    enquiry = await db.leads.count_documents({"type": "enquiry"})
    dealer = await db.leads.count_documents({"type": "dealer"})
    bulk = await db.leads.count_documents({"type": "bulk-order"})
    contact = await db.leads.count_documents({"type": "contact"})
    posts = await db.blog_posts.count_documents({})
    products_total = await db.products.count_documents({})
    products_active = await db.products.count_documents({"active": True})
    return {
        "total_leads": total,
        "enquiry": enquiry,
        "dealer": dealer,
        "bulk_order": bulk,
        "contact": contact,
        "blog_posts": posts,
        "products_total": products_total,
        "products_active": products_active,
    }


# ---------- Admin Products ----------
@api_router.get("/admin/products")
async def admin_list_products(user: dict = Depends(get_current_admin)):
    cursor = db.products.find({}, {"_id": 0}).sort([("sort_order", 1), ("created_at", -1)])
    return await cursor.to_list(1000)


@api_router.post("/admin/products")
async def admin_create_product(payload: ProductCreate, user: dict = Depends(get_current_admin)):
    existing = await db.products.find_one({"slug": payload.slug})
    if existing:
        raise HTTPException(status_code=409, detail="Slug already exists")
    doc = {
        "id": str(uuid.uuid4()),
        **payload.model_dump(),
        "created_at": now_iso(),
        "updated_at": now_iso(),
    }
    await db.products.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.put("/admin/products/{slug}")
async def admin_update_product(slug: str, payload: ProductUpdate, user: dict = Depends(get_current_admin)):
    updates = {k: v for k, v in payload.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    updates["updated_at"] = now_iso()
    result = await db.products.update_one({"slug": slug}, {"$set": updates})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return await db.products.find_one({"slug": slug}, {"_id": 0})


@api_router.delete("/admin/products/{slug}")
async def admin_delete_product(slug: str, user: dict = Depends(get_current_admin)):
    result = await db.products.delete_one({"slug": slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"success": True}


# ---------- Sheets Integration settings ----------
class SheetSettings(BaseModel):
    enquiry_url: str = ""
    dealer_url: str = ""


@api_router.get("/admin/integrations/sheets")
async def get_sheet_settings(user: dict = Depends(get_current_admin)):
    enq = await get_sheet_url("enquiry")
    deal = await get_sheet_url("dealer")
    return {"enquiry_url": enq, "dealer_url": deal}


@api_router.put("/admin/integrations/sheets")
async def update_sheet_settings(payload: SheetSettings, user: dict = Depends(get_current_admin)):
    await db.settings.update_one(
        {"key": "gsheets_enquiry_url"},
        {"$set": {"key": "gsheets_enquiry_url", "value": payload.enquiry_url.strip(), "updated_at": now_iso()}},
        upsert=True,
    )
    await db.settings.update_one(
        {"key": "gsheets_dealer_url"},
        {"$set": {"key": "gsheets_dealer_url", "value": payload.dealer_url.strip(), "updated_at": now_iso()}},
        upsert=True,
    )
    return {"success": True, "enquiry_url": payload.enquiry_url.strip(), "dealer_url": payload.dealer_url.strip()}


@api_router.post("/admin/integrations/sheets/test/{lead_type}")
async def test_sheet_webhook(lead_type: str, user: dict = Depends(get_current_admin)):
    if lead_type not in ("enquiry", "dealer"):
        raise HTTPException(status_code=400, detail="lead_type must be 'enquiry' or 'dealer'")
    url = await get_sheet_url(lead_type)
    if not url:
        raise HTTPException(status_code=400, detail="No URL configured for this lead type")
    test_doc = {
        "id": f"test-{uuid.uuid4().hex[:8]}",
        "type": lead_type,
        "created_at": now_iso(),
        "data": {
            "name": "KrishiGears Test",
            "full_name": "KrishiGears Test",
            "phone": "9999999999",
            "email": "test@krishigears.in",
            "product": "Power Tiller",
            "city": "Jaipur",
            "state": "Rajasthan",
            "message": "This is a test row sent from the KrishiGears Admin panel.",
        },
    }
    payload = {"id": test_doc["id"], "type": test_doc["type"], "created_at": test_doc["created_at"], **test_doc["data"]}
    try:
        async with httpx.AsyncClient(timeout=15.0, follow_redirects=True) as client:
            resp = await client.post(url, json=payload)
            return {"success": resp.status_code < 400, "status_code": resp.status_code, "body": resp.text[:300]}
    except Exception as e:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"Webhook call failed: {e}")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
