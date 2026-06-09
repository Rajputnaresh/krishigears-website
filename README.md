# KrishiGears Website

React + FastAPI site for KrishiGears.

This repo is self-hostable and no longer depends on Emergent runtime scripts,
Emergent dev overlays, private Emergent package URLs, or Emergent-hosted core
assets.

## App Structure

- `frontend/` - React app built with CRACO and Tailwind.
- `backend/` - FastAPI API with MongoDB storage for products, blogs, leads,
  warranty registrations, videos, reviews, and admin access.
- `render.yaml` - Render Blueprint for a backend web service plus a static
  frontend.

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

The frontend defaults to `http://localhost:8001` for API calls in development.
For production, set `REACT_APP_BACKEND_URL` to your backend's public origin.

## Render Hosting

1. Create a MongoDB Atlas database and copy its connection string.
2. In Render, create a Blueprint from this GitHub repository.
3. Render reads `render.yaml` and creates:
   - `krishigears-api` - FastAPI backend.
   - `krishigears-frontend` - static React frontend.
4. Set these backend environment variables in Render:
   - `MONGO_URL`
   - `DB_NAME`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `CORS_ORIGINS`
5. Set frontend `REACT_APP_BACKEND_URL` to the public URL of the backend
   service, for example `https://krishigears-api.onrender.com`.
6. Add your custom domain to the frontend service and point DNS to Render.

For `CORS_ORIGINS`, use a comma-separated list, for example:

```text
https://krishigears.in,https://www.krishigears.in
```
