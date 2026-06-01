from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

import os
import uuid
import logging
import bcrypt
import jwt
from datetime import datetime, timezone, timedelta
from typing import List, Optional, Literal

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, Query
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from contextlib import asynccontextmanager


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


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.users.create_index("email", unique=True)
    await db.leads.create_index([("created_at", -1)])
    await db.blog_posts.create_index("slug", unique=True)
    await seed_admin()
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
    return {"success": True, "id": doc["id"]}


@api_router.post("/leads/dealer")
async def submit_dealer(payload: DealerCreate):
    doc = lead_doc("dealer", payload.model_dump())
    await db.leads.insert_one(doc)
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
    return {
        "total_leads": total,
        "enquiry": enquiry,
        "dealer": dealer,
        "bulk_order": bulk,
        "contact": contact,
        "blog_posts": posts,
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
