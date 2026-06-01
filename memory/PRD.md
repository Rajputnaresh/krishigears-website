# KrishiGears.in — Product Requirements Document

## Problem Statement
KrishiGears is an authorized dealer of Royal Kissan Agro agricultural machinery in India. The website must serve as a national-grade marketing + lead-generation platform for farmers, dealers, contractors, FPOs, retailers, government tender buyers and institutional buyers.

- Tagline: "For the Farmers, With the Farmer, To the Farmer, HAMESHA"
- Theme: Black / Dark Grey / Lime Green
- Domain: KrishiGears.in
- Brand contact: sales@krishigears.com / support@krishigears.com

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind 3 + Shadcn UI + Lucide-react + Sonner toasts
- **Backend**: FastAPI + Motor (MongoDB async) + bcrypt + PyJWT (Bearer token auth)
- **Database**: MongoDB (`krishigears_db`)
- **Design system**: Industrial High-Contrast (`/app/design_guidelines.json`) — Outfit (display) + Manrope (body), Zinc + Lime palette, Bento grid + Control Room spec tables

## User Personas
1. **Farmer** — Browses categories, requests price via WhatsApp / enquiry form
2. **Aspiring Dealer** — Applies via "Become a Dealer" form
3. **FPO / Contractor / Government Buyer** — Uses Bulk Order form
4. **Admin (business owner)** — Logs into `/admin` to view leads + manage blog

## Core Requirements (Static)
- 19 product categories with category pages
- Product detail pages with specs / features / applications / benefits / warranty
- Hero + Bento category grid + Featured products + About + Why-choose + Video gallery + Testimonials + Dealer CTA + Contact form
- Floating WhatsApp + sticky mobile call button
- 6 SEO landing pages (Power Weeder Supplier India, etc.)
- Public forms: Enquiry, Dealer registration, Bulk order, Contact
- Blog (admin-managed, with sample posts on empty DB)
- Warranty & Support page with FAQs

## What's Implemented (2026-06-01)
- ✅ Backend: 18 endpoints — auth login/me, 4 lead submission endpoints, blog public/admin CRUD, admin stats, admin lead listing/delete
- ✅ Admin seeding on startup (idempotent, password rotation supported)
- ✅ JWT Bearer auth via localStorage
- ✅ MongoDB models — users, leads, blog_posts with indexes
- ✅ Full responsive frontend with all pages: Home, About, Products, CategoryPage, ProductDetail, DealerNetwork, BecomeDealer, BulkOrder, Contact, Warranty, Blog, BlogPost, 6 SeoLanding pages, AdminLogin, AdminDashboard
- ✅ EnquiryDialog reusable component on every product/category page + Home
- ✅ Floating WhatsApp + sticky mobile call button
- ✅ Admin dashboard with tabs: Leads (filter by type, expand details, delete) + Blog (create/edit/delete/publish toggle)
- ✅ Stats cards on admin dashboard
- ✅ 33/33 backend tests passing (iteration_1)

## Tech Notes / Decisions
- JWT via Authorization header (NOT cookies) — chosen for simpler CORS with `*` origin
- Static `data/catalog.js` for 19 categories + 5 sample products (no admin product CRUD in MVP)
- Sample blog posts hardcoded as fallback when DB is empty (so blog page never looks empty)
- Phone, WhatsApp, GST, address are placeholders — user must update in `/app/frontend/src/data/catalog.js` `COMPANY` object

## Prioritized Backlog (P1/P2)
- **P1**: Admin-managed product CRUD (currently static)
- **P1**: Email notifications to admin when leads arrive (needs SendGrid/Resend integration)
- **P1**: Image upload via Emergent object storage for blog covers
- **P2**: Pagination on admin leads & blog (current limit 1000/200)
- **P2**: Brute-force lockout on `/api/auth/login`
- **P2**: Sitemap.xml + structured data (JSON-LD) for SEO pages
- **P2**: WhatsApp Business API webhook integration

## Files of Note
- `/app/backend/server.py` — all endpoints
- `/app/backend/.env` — JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD, MONGO_URL
- `/app/frontend/src/data/catalog.js` — categories, products, contact placeholders
- `/app/memory/test_credentials.md` — admin login credentials
- `/app/design_guidelines.json` — design spec
