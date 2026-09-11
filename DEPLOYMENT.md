<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
>>>>>>> f2aa0d2e297eb80274c31a6f3044e877e939dab5
# Zvertex3D v2.5.0 — Supabase + GitHub + Netlify + Render

## 1. Supabase PostgreSQL

Create/open your Supabase project and run **`server/supabase/schema.sql`** in **SQL Editor**.

The application uses these tables:
- `users`
- `vendors`
- `model_assets`
- `orders`

RLS is enabled. The Express backend uses the **server-only service-role key**, so privileged operations stay on Render. Never expose that key in React, Netlify, GitHub, or chat.

Supabase's current React documentation uses a project URL and publishable key for browser-side integrations. This Zvertex3D build intentionally keeps database access behind the existing Render API because the app also needs image processing, STL generation, email, custom JWT sessions and admin/vendor workflows. citeturn0search0turn0search12

## 2. Local backend

Copy:
`server/.env.example` → `server/.env`

Set:
`SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co`
`SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVER_ONLY_KEY`
`JWT_SECRET=YOUR_RANDOM_SECRET`
`CLIENT_URL=http://localhost:5173`

Then:
```powershell
cd server
npm install
npm run dev
```

Test:
`http://localhost:5000/health`

Expected database value:
`supabase-postgresql`

## 3. Local frontend

Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

Then:
```powershell
cd client
npm install
npm run dev
```

## 4. Render

Deploy the repository to Render using the root `render.yaml`.

Render service settings:
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check: `/health`

Environment variables:
- `NODE_ENV=production`
- `PORT=10000`
- `SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co`
- `SUPABASE_SERVICE_ROLE_KEY=<service role key>`
- `JWT_SECRET=<strong secret>`
- `CLIENT_URL=https://YOUR-NETLIFY-DOMAIN.netlify.app`
- SMTP variables if email is enabled

Do NOT add `MONGO_URI`, `MONGODB_URI`, or any MongoDB configuration. MongoDB/Mongoose has been removed from this codebase.

## 5. Netlify

Netlify uses `netlify.toml`.

- Base directory: `client`
- Build command: `npm run build`
- Publish directory: `dist`
- Node: 20

Environment variable:
`VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com/api`

Redeploy after changing environment variables.

## 6. GitHub from VS Code

From the project root:
```powershell
git init
git branch -M main
git add .
<<<<<<< HEAD
git commit -m "Migrate Zvertex3D to Supabase PostgreSQL"
=======
<<<<<<< HEAD
git commit -m "Migrate Zvertex3D to Supabase PostgreSQL"
=======
<<<<<<< HEAD
git status
git commit -m "Zvertex3D v2.5.1 deployment-ready"
=======
git commit -m "Migrate Zvertex3D to Supabase PostgreSQL"
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
>>>>>>> f2aa0d2e297eb80274c31a6f3044e877e939dab5
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

If a remote already exists:
```powershell
git remote -v
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

GitHub recommends staging, committing and pushing from the local repository; never commit passwords or API keys. citeturn0search5turn0search10

## 7. What connects to what

Customer browser
→ Netlify React app
→ `VITE_API_URL`
→ Render Express API
→ `SUPABASE_URL` + service-role key
→ Supabase PostgreSQL

For image-to-STL:
Browser uploads image → Render uses Sharp/STL generator → STL is stored in `model_assets` → browser downloads it through the Render API.

For orders:
Browser submits configuration → Render validates vendor/model → Supabase `orders` row → optional email notifications.

For authentication:
Render stores password hashes and verification tokens in Supabase `users`; the browser receives only the JWT session token.

## 8. Admin account

On Render or locally, set:
`ADMIN_EMAIL`
`ADMIN_PASSWORD`

Then run:
```powershell
npm run seed:admin
```

Never put the admin password in GitHub.


## Render production environment (v2.5.0)
Set these variables on the `zvertex3d-api` Render service:
- `SUPABASE_URL` = Supabase Project URL
- `SUPABASE_SECRET_KEY` = Supabase Secret key (server-only)
- `JWT_SECRET` = long random value
- `CLIENT_URL` = `https://zvertex3d.com,https://www.zvertex3d.com`
- `SMTP_USER` = `zvertex3d@gmail.com`
- `SMTP_PASS` = Gmail App Password
- `MAIL_FROM` = `zvertex3d@gmail.com`
- `ADMIN_EMAIL` = `zvertex3d@gmail.com`

Use Node 20.x and redeploy. Then verify `/health` returns `ok: true` and `database: supabase-postgresql`.

## Netlify
Set `VITE_API_URL` to `https://zvertex3d-api.onrender.com/api`, then trigger a new deploy.

## 10. Remove the Netlify "Powered by Netlify" badge
The badge is **not in this source code**. Netlify injects it at the edge after the site is built, so removing HTML/React footer code does not remove it. For the live site, open the Netlify project and go to:

**Project configuration → General → Powered by Netlify badge → Off → Save**

No redeploy is required for this setting change. This is the supported Netlify method for removing the badge for all visitors. See the official documentation: https://docs.netlify.com/manage/projects/powered-by-netlify-badge/

Do not add a fake CSS overlay or JavaScript hack to hide it; the Netlify project setting is cleaner and survives future deploys.

## 11. Frontend visual update
The homepage now uses the supplied Zvertex3D product photos from `client/public/showcase/`. The new homepage includes:
- rotating hero project photography
- clickable hero slide indicators
- dark premium visual system and responsive mobile layout
- interactive "What we do" category filters
- photo-backed service/category grid
- animated real-work showcase
- robotics/STEM feature section
- medical/dental high-detail section
- mobile-first responsive spacing and navigation styling

After pulling the new code, run `npm install` and `npm run build` inside `client` before deployment.
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
>>>>>>> f2aa0d2e297eb80274c31a6f3044e877e939dab5
