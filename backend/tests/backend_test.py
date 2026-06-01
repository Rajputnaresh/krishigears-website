"""
KrishiGears backend API tests
Covers: health, auth, leads (4 types), admin leads/stats/blog CRUD, auth guards.
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://farm-machinery-demo.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "admin@krishigears.in"
ADMIN_PASSWORD = "KrishiGears@2026"

TEST_SLUG = "farm-machinery-demo"


# ---------- Fixtures ----------
@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def admin_token(session):
    r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=30)
    assert r.status_code == 200, f"Admin login failed: {r.status_code} {r.text}"
    data = r.json()
    assert "access_token" in data and isinstance(data["access_token"], str)
    assert data["user"]["email"] == ADMIN_EMAIL
    return data["access_token"]


@pytest.fixture(scope="session")
def auth_headers(admin_token):
    return {"Authorization": f"Bearer {admin_token}", "Content-Type": "application/json"}


# ---------- Health ----------
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        body = r.json()
        assert body.get("status") == "ok"
        assert "KrishiGears" in body.get("name", "")


# ---------- Auth ----------
class TestAuth:
    def test_login_success(self, session):
        r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
        assert r.status_code == 200
        data = r.json()
        assert "access_token" in data
        assert data["user"]["email"] == ADMIN_EMAIL
        assert data["user"].get("role") == "admin"
        assert "password_hash" not in data["user"]

    def test_login_invalid_password(self, session):
        r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"})
        assert r.status_code == 401

    def test_login_unknown_email(self, session):
        r = session.post(f"{API}/auth/login", json={"email": "nobody@example.com", "password": "x"})
        assert r.status_code == 401

    def test_me_with_token(self, session, auth_headers):
        r = session.get(f"{API}/auth/me", headers=auth_headers)
        assert r.status_code == 200
        u = r.json()
        assert u["email"] == ADMIN_EMAIL
        assert u.get("role") == "admin"

    def test_me_missing_token(self, session):
        r = requests.get(f"{API}/auth/me")
        assert r.status_code == 401

    def test_me_invalid_token(self, session):
        r = requests.get(f"{API}/auth/me", headers={"Authorization": "Bearer not-a-real-token"})
        assert r.status_code == 401


# ---------- Public lead submissions ----------
class TestLeadsSubmit:
    created = {}

    def test_submit_enquiry(self, session):
        payload = {
            "name": "TEST_Enquiry User",
            "phone": "9999999991",
            "email": "TEST_enq@example.com",
            "location": "Pune",
            "product": "Mini Tractor",
            "message": "Need pricing",
        }
        r = session.post(f"{API}/leads/enquiry", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True
        assert isinstance(data["id"], str)
        TestLeadsSubmit.created["enquiry"] = data["id"]

    def test_submit_dealer(self, session):
        payload = {
            "full_name": "TEST_Dealer User",
            "phone": "9999999992",
            "email": "TEST_dealer@example.com",
            "business_name": "TEST AgroMart",
            "city": "Nashik",
            "state": "Maharashtra",
            "pincode": "422001",
            "years_in_business": "5",
            "current_products": "Pumps",
            "message": "Interested in dealership",
        }
        r = session.post(f"{API}/leads/dealer", json=payload)
        assert r.status_code == 200, r.text
        TestLeadsSubmit.created["dealer"] = r.json()["id"]

    def test_submit_bulk_order(self, session):
        payload = {
            "name": "TEST_Bulk User",
            "phone": "9999999993",
            "email": "TEST_bulk@example.com",
            "organization": "TEST FPO",
            "location": "Indore",
            "product": "Power Tiller",
            "quantity": "25",
            "message": "Quarterly bulk order",
        }
        r = session.post(f"{API}/leads/bulk-order", json=payload)
        assert r.status_code == 200, r.text
        TestLeadsSubmit.created["bulk-order"] = r.json()["id"]

    def test_submit_contact(self, session):
        payload = {
            "name": "TEST_Contact User",
            "phone": "9999999994",
            "email": "TEST_contact@example.com",
            "subject": "Service query",
            "message": "Need warranty info",
        }
        r = session.post(f"{API}/leads/contact", json=payload)
        assert r.status_code == 200, r.text
        TestLeadsSubmit.created["contact"] = r.json()["id"]

    def test_submit_enquiry_missing_required(self, session):
        # name & phone are required
        r = session.post(f"{API}/leads/enquiry", json={"email": "x@y.com"})
        assert r.status_code == 422


# ---------- Admin leads listing/delete ----------
class TestAdminLeads:
    def test_list_enquiry(self, session, auth_headers):
        r = session.get(f"{API}/admin/leads", params={"type": "enquiry"}, headers=auth_headers)
        assert r.status_code == 200
        leads = r.json()
        assert isinstance(leads, list)
        assert any(l["id"] == TestLeadsSubmit.created.get("enquiry") for l in leads)
        # Verify shape
        for l in leads:
            assert l["type"] == "enquiry"
            assert "data" in l and "created_at" in l
            assert "_id" not in l

    def test_list_all(self, session, auth_headers):
        r = session.get(f"{API}/admin/leads", params={"type": "all"}, headers=auth_headers)
        assert r.status_code == 200
        leads = r.json()
        ids = {l["id"] for l in leads}
        types_present = {l["type"] for l in leads}
        for t in ("enquiry", "dealer", "bulk-order", "contact"):
            assert t in types_present, f"Missing type {t} in admin leads"
        for t, lid in TestLeadsSubmit.created.items():
            assert lid in ids, f"Created {t} lead {lid} not present"

    def test_list_without_auth(self, session):
        r = requests.get(f"{API}/admin/leads")
        assert r.status_code == 401

    def test_delete_lead(self, session, auth_headers):
        lead_id = TestLeadsSubmit.created.get("contact")
        assert lead_id, "No contact lead id captured"
        r = session.delete(f"{API}/admin/leads/{lead_id}", headers=auth_headers)
        assert r.status_code == 200
        # Verify removal
        r2 = session.get(f"{API}/admin/leads", params={"type": "contact"}, headers=auth_headers)
        assert r2.status_code == 200
        assert not any(l["id"] == lead_id for l in r2.json())

    def test_delete_nonexistent(self, session, auth_headers):
        r = session.delete(f"{API}/admin/leads/nonexistent-id-xyz", headers=auth_headers)
        assert r.status_code == 404


# ---------- Admin stats ----------
class TestAdminStats:
    def test_stats(self, session, auth_headers):
        r = session.get(f"{API}/admin/stats", headers=auth_headers)
        assert r.status_code == 200
        s = r.json()
        for k in ("total_leads", "enquiry", "dealer", "bulk_order", "contact", "blog_posts"):
            assert k in s
            assert isinstance(s[k], int)
        assert s["enquiry"] >= 1
        assert s["dealer"] >= 1
        assert s["bulk_order"] >= 1

    def test_stats_unauth(self, session):
        r = requests.get(f"{API}/admin/stats")
        assert r.status_code == 401


# ---------- Blog CRUD ----------
class TestBlog:
    # Use a unique slug per session to avoid 409 if a previous run left data,
    # but the review_request specifies a fixed slug — so delete first then create.
    def test_cleanup_before(self, session, auth_headers):
        # Attempt delete; ignore 404.
        session.delete(f"{API}/admin/blog/{TEST_SLUG}", headers=auth_headers)

    def test_create_post(self, session, auth_headers):
        payload = {
            "title": "Farm Machinery Demo Post",
            "slug": TEST_SLUG,
            "excerpt": "Demo excerpt for testing",
            "content": "Full content body for the demo blog post.",
            "cover_image": "https://example.com/demo.jpg",
            "tags": ["demo", "test"],
            "published": True,
        }
        r = session.post(f"{API}/admin/blog", json=payload, headers=auth_headers)
        assert r.status_code == 200, r.text
        post = r.json()
        assert post["slug"] == TEST_SLUG
        assert post["title"] == payload["title"]
        assert "id" in post
        assert "_id" not in post

    def test_create_duplicate_slug(self, session, auth_headers):
        payload = {
            "title": "Dup",
            "slug": TEST_SLUG,
            "excerpt": "x",
            "content": "y",
        }
        r = session.post(f"{API}/admin/blog", json=payload, headers=auth_headers)
        assert r.status_code == 409

    def test_public_list_blog(self, session):
        r = session.get(f"{API}/blog")
        assert r.status_code == 200
        posts = r.json()
        assert isinstance(posts, list)
        slugs = {p["slug"] for p in posts}
        assert TEST_SLUG in slugs
        # content excluded from list projection
        for p in posts:
            assert "content" not in p
            assert "_id" not in p

    def test_public_get_blog(self, session):
        r = session.get(f"{API}/blog/{TEST_SLUG}")
        assert r.status_code == 200
        post = r.json()
        assert post["slug"] == TEST_SLUG
        assert post["title"] == "Farm Machinery Demo Post"
        assert "content" in post and len(post["content"]) > 0
        assert "_id" not in post

    def test_public_get_missing(self, session):
        r = session.get(f"{API}/blog/does-not-exist-{uuid.uuid4().hex[:6]}")
        assert r.status_code == 404

    def test_update_blog(self, session, auth_headers):
        r = session.put(
            f"{API}/admin/blog/{TEST_SLUG}",
            json={"title": "Updated Demo Title", "tags": ["demo", "updated"]},
            headers=auth_headers,
        )
        assert r.status_code == 200, r.text
        post = r.json()
        assert post["title"] == "Updated Demo Title"
        assert "updated" in post["tags"]
        # GET to verify persistence
        r2 = session.get(f"{API}/blog/{TEST_SLUG}")
        assert r2.status_code == 200
        assert r2.json()["title"] == "Updated Demo Title"

    def test_update_empty_payload(self, session, auth_headers):
        r = session.put(f"{API}/admin/blog/{TEST_SLUG}", json={}, headers=auth_headers)
        assert r.status_code == 400

    def test_update_unauth(self, session):
        r = requests.put(f"{API}/admin/blog/{TEST_SLUG}", json={"title": "x"})
        assert r.status_code == 401

    def test_admin_list_blog(self, session, auth_headers):
        r = session.get(f"{API}/admin/blog", headers=auth_headers)
        assert r.status_code == 200
        assert any(p["slug"] == TEST_SLUG for p in r.json())

    def test_delete_blog(self, session, auth_headers):
        r = session.delete(f"{API}/admin/blog/{TEST_SLUG}", headers=auth_headers)
        assert r.status_code == 200
        # Verify gone
        r2 = session.get(f"{API}/blog/{TEST_SLUG}")
        assert r2.status_code == 404

    def test_delete_blog_missing(self, session, auth_headers):
        r = session.delete(f"{API}/admin/blog/{TEST_SLUG}", headers=auth_headers)
        assert r.status_code == 404

    def test_create_blog_unauth(self, session):
        r = requests.post(f"{API}/admin/blog", json={"title": "x", "slug": "y", "excerpt": "e", "content": "c"})
        assert r.status_code == 401


# ---------- Final cleanup of test leads ----------
class TestCleanup:
    def test_cleanup_test_leads(self, session, auth_headers):
        # Delete all TEST_ prefixed leads we created (enquiry, dealer, bulk-order)
        for t, lid in TestLeadsSubmit.created.items():
            if t == "contact":
                continue  # already deleted in TestAdminLeads
            r = session.delete(f"{API}/admin/leads/{lid}", headers=auth_headers)
            assert r.status_code in (200, 404)
