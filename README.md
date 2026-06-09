# KrishiGears Website

KrishiGears.in is the B2B brand, dealer network, bulk order, OEM/distributor and institutional lead-generation website for KrishiGears. Retail buying intent is routed to FarmingTools.in.

## Framework

- Frontend: Create React App with CRACO, React Router and Tailwind CSS.
- Backend: FastAPI exposed on Vercel as a Python serverless function.
- Database: MongoDB through Motor async client with warm serverless connection reuse.

## Vercel Build Settings

Use the repository root as the Vercel project root.

- Install command: `cd frontend && yarn install --frozen-lockfile --ignore-engines`
- Build command: `cd frontend && yarn build`
- Output directory: `frontend/build`
- API entrypoint: `api/index.py`
- API routing: `/api/*` rewrites to the FastAPI app.
- SPA routing: all non-API routes rewrite to `index.html`.

These settings are also defined in `vercel.json`.

## Required Environment Variables

Set these in Vercel Project Settings > Environment Variables. Do not commit real values.

Backend:

- `MONGODB_URI` preferred MongoDB Atlas connection string
- `MONGO_URL` optional legacy alias
- `DATABASE_URL` optional fallback alias if already used for MongoDB
- `DB_NAME`
- `MONGODB_DB` optional alias for `DB_NAME`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `CORS_ORIGINS`

Frontend:

- `REACT_APP_BACKEND_URL` leave empty on Vercel for same-origin `/api`
- `REACT_APP_SITE_URL=https://krishigears.in`
- `REACT_APP_FARMINGTOOLS_URL=https://farmingtools.in`

Optional:

- `GSHEETS_ENQUIRY_URL`
- `GSHEETS_DEALER_URL`
- `GSHEETS_WARRANTY_URL`
- `MONGO_MAX_POOL_SIZE`
- `MONGO_SERVER_SELECTION_TIMEOUT_MS`

Note: this project is Create React App, not Next.js. Use `REACT_APP_*` for browser-exposed values. If Vercel already has `NEXT_PUBLIC_SITE_URL` or `NEXT_PUBLIC_FARMINGTOOLS_URL`, duplicate those values into `REACT_APP_SITE_URL` and `REACT_APP_FARMINGTOOLS_URL`.

## Local Development

Backend:

```bash
cd backend
cp .env.example .env
pip install -r requirements-dev.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Frontend:

```bash
cd frontend
cp .env.example .env
yarn install --ignore-engines
yarn start
```

## Lead Forms

The following forms submit to FastAPI and store leads in MongoDB:

- Product enquiry: `/api/leads/enquiry`
- Dealer application: `/api/leads/dealer`
- Bulk order / institutional supply: `/api/leads/bulk-order`
- Contact form: `/api/leads/contact`
- Warranty registration: `/api/warranty/register`

Email delivery is not required for form capture. Google Sheets webhooks are optional and can be configured later through env vars or the admin integration screen.

## Domain Setup

Add both domains in Vercel:

- `krishigears.in`
- `www.krishigears.in`

Typical DNS records:

- Apex `krishigears.in`: `A` record to `76.76.21.21`
- `www.krishigears.in`: `CNAME` record to `cname.vercel-dns.com`

After DNS verification, set `krishigears.in` as the primary production domain and redirect `www` to the apex domain in Vercel.

## SEO Role

- KrishiGears.in: B2B brand, dealer, bulk order, OEM/distributor and institutional lead-generation site.
- FarmingTools.in: primary ecommerce/retail purchase site.
- Product/category pages remain on KrishiGears for B2B validation and lead capture.
- Retail purchase CTAs point to FarmingTools.in.

Robots and sitemap are in `frontend/public/robots.txt` and `frontend/public/sitemap.xml`.
