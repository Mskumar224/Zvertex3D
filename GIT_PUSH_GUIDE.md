# Zvertex3D — Clean Git Push Guide

This package contains source code only. It does not contain a `.git` directory, `node_modules`, build output, or environment secrets.

## Fresh Git setup (recommended)

Open this extracted folder in VS Code and run:

```powershell
git init
git branch -M main
git add .
git status
git diff --cached --check
git commit -m "Zvertex3D clean deployment"
```

If the GitHub repository is intended to be replaced by this exact clean codebase:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main --force
```

If `origin` already exists:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main --force
```

Do not run `git pull` first when replacing an old/conflicted repository history.

## If using the old local folder

Do not copy this code into a folder whose `.git` directory contains unresolved merges. Open this extracted folder as a new VS Code workspace and initialize Git there.

## Deployment

- Netlify uses `client` as its base directory and runs `npm run build`.
- Render uses `server` as its root directory and runs `npm install` followed by `npm start`.
- Create production environment variables in Netlify/Render; do not commit `.env` files.
