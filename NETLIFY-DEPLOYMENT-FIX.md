# Netlify deployment fix

This codebase contains a clean `client/package.json` with no Git merge-conflict markers.

Netlify settings:
- Base directory: `client`
- Build command: `npm run build`
- Publish directory: `client/dist` (or `dist` when Base directory is `client`)
- Node: 20

Before pushing, from the repository root run:
```powershell
git grep -n -E "^(<<<<<<<|=======|>>>>>>>)"
```
It should return no results.

Then:
```powershell
git add .
git commit -m "Fix Netlify package.json merge conflict"
git push origin main
```

If GitHub already contains a conflicting version of `client/package.json`, make sure the clean version in this ZIP is the version committed to `main`.
