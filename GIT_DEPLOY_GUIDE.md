# Zvertex3D v2.5.1 — Git Push & Deployment Guide

## Why this package was changed
- Removed the accidental root `package-lock.json` that did not describe the application.
- Fixed the client conflict-marker checker: CSS separator lines such as `=========================================================` are no longer mistaken for Git merge conflicts.
- Added `.gitattributes` for consistent LF line endings.
- Kept `client` and `server` as independent npm projects, matching Netlify and Render deployment roots.
- No `.git` directory, secrets, `node_modules`, or build output is included.

## Clean first push from VS Code / PowerShell

Run these commands from this project root:

```powershell
git init
git branch -M main
git add .
git status
git commit -m "Zvertex3D v2.5.1 deployment-ready"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If `origin` already exists:

```powershell
git remote -v
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If GitHub says the remote contains commits you do not have locally, and those remote commits must be preserved:

```powershell
git pull --rebase origin main
git push -u origin main
```

Do not use `git push --force` unless you intentionally want to replace the remote branch history.

## Local verification

Frontend:

```powershell
cd client
npm install
npm run build
```

Backend:

```powershell
cd ..\server
npm install
npm start
```

Health check:

`http://localhost:5000/health`

## Deployment
- Netlify: repository root, `netlify.toml` selects `client` as the build base.
- Render: `render.yaml` selects `server` as the service root.
- Set production secrets only in Netlify/Render environment variables. Never commit `.env`.

The package has been statically checked for JavaScript syntax, JSON validity, Git conflict markers, and Git staging compatibility. A full dependency installation/build requires access to the npm registry and the real Supabase/Render environment.
