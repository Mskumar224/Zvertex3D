# Zvertex3D v2.5.1 — Production Pre-Deploy Notes

<<<<<<< HEAD
=======
<<<<<<< HEAD
This package has been cleaned for Git and deployment-critical issues.

## Verified
- Git merge-conflict detection script only flags real 7-character conflict-marker lines; decorative CSS separators are not treated as conflicts.
=======
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
This package has been reviewed for deployment-critical issues.

## Verified
- No Git merge-conflict markers in source/config files.
<<<<<<< HEAD
=======
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
- Server JavaScript passes `node --check`.
- `client/package.json` and `server/package.json` are valid JSON.
- Netlify SPA fallback is configured in `netlify.toml`.
- Render health check is configured for `/health`.
- Production API defaults to `https://zvertex3d-api.onrender.com/api` when `VITE_API_URL` is not supplied.
- Supabase server credentials remain server-side; no `.env` file is included.
- Production CORS allows `https://zvertex3d.com` and `https://www.zvertex3d.com`, plus any origins explicitly supplied through `CLIENT_URL`.
- Development localhost CORS is only enabled when `NODE_ENV` is not `production`.
- Production API errors no longer expose internal exception/database messages for unexpected 5xx errors.
- Image preview object URLs are cleaned up in the model builder.

## Important limitation of this audit
The execution environment could not download npm packages from the public npm registry, so a fresh `npm install` + Vite production build could not be completed here. The source itself was statically checked, but no one can honestly guarantee zero runtime/deployment errors without building against the exact production dependency installation and real Supabase/Render/Netlify environment.

## Deploy order

### 1. Supabase
Run `server/supabase/schema.sql` once in the Supabase SQL Editor.

### 2. Render
Use:
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`

Set:
- `NODE_ENV=production`
- `SUPABASE_URL=<your Supabase project URL>`
- `SUPABASE_SECRET_KEY=<your Supabase server-only secret key>`
- `JWT_SECRET=<long random secret>`
- `CLIENT_URL=https://zvertex3d.com,https://www.zvertex3d.com`
- SMTP variables if email is required
- `ADMIN_EMAIL=<your admin email>`
- `ADMIN_PASSWORD=<your admin password>` only when running the admin seed command

Never commit secrets to GitHub.

### 3. Netlify
The included `netlify.toml` uses:
- Base: `client`
- Build: `npm run build`
- Publish: `dist`
- Node: 20

Set:
`VITE_API_URL=https://zvertex3d-api.onrender.com/api`

### 4. Final smoke test
After both services deploy, verify:
1. `https://zvertex3d-api.onrender.com/health` returns HTTP 200 with `"ok": true`.
2. Open `https://zvertex3d.com`.
3. Refresh `/configure`, `/marketplace`, `/login`, and `/future-projects` directly.
4. Generate an image-to-STL model.
5. Download the generated STL.
6. Register and verify a customer account if SMTP is configured.
7. Register a vendor, approve it from admin, and confirm it appears in Marketplace.
8. Submit a test manufacturing request.
9. Check Render logs and Supabase rows for the test.

Do not treat the site as production-ready until the smoke test passes.
