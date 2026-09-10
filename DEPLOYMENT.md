# Zvertex3D v2.4.0 Deployment

## Architecture
Netlify (React) → Render (Express API) → Supabase PostgreSQL

## Email policy
All application communications are sent from/reply to `zvertex3d@gmail.com`. Signup and vendor applications send confirmation emails only. **No email verification is required.** Users can sign in immediately after signup.

For Gmail SMTP, use a Google App Password in `SMTP_PASS`; never commit the password.

## Local backend
Copy `server/.env.example` to `server/.env`, fill Supabase and Gmail settings, then run:
`cd server`
`npm install`
`npm start`

Health: `http://localhost:5000/health`

## Netlify
Build command: `cd client && npm install && npm run build`
Publish directory: `client/dist`
Environment: `VITE_API_URL=https://zvertex3d-api.onrender.com/api`

## Render
Root directory: `server`
Build: `npm install`
Start: `npm start`
Health check: `/health`

Required environment variables:
- `NODE_ENV=production`
- `PORT=10000`
- `SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co`
- `SUPABASE_SERVICE_ROLE_KEY=<server-only key>`
- `JWT_SECRET=<strong secret>`
- `CLIENT_URL=https://YOUR-NETLIFY-DOMAIN.netlify.app`
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_SECURE=false`
- `SMTP_USER=zvertex3d@gmail.com`
- `SMTP_PASS=<Google App Password>`
- `MAIL_FROM=zvertex3d@gmail.com`
- `ADMIN_EMAIL=zvertex3d@gmail.com`

## STL generation
The API now generates compact binary STL instead of large ASCII STL. Images are resized to a controlled mesh resolution to keep generation reliable. The browser gets a real STL URL and the included Three.js viewer provides drag/zoom/360° auto-rotation.

## Vendor marketplace
Vendor application → confirmation email → admin approval → vendor status becomes `approved` → public marketplace query automatically includes the store.


### Critical frontend API setting
The frontend must never use `http://localhost:5000/api` in the production build. In Netlify, open **Site configuration → Environment variables** and set:

`VITE_API_URL=https://zvertex3d-api.onrender.com/api`

Then trigger a new production deploy. Vite embeds `VITE_*` variables at build time, so changing the variable requires a rebuild/redeploy. If your Render dashboard shows a different backend hostname, use that exact hostname instead.
