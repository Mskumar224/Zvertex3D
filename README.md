# Zvertex3D

Zvertex3D is a React/Vite manufacturing marketplace and image-to-STL workflow.

## Production architecture

Browser → Netlify (React frontend) → Render (Express API) → Supabase PostgreSQL

The backend keeps the Supabase service-role key private. The browser never receives that key.

## Main functionality

- Image-to-STL model generation
- 3D STL preview and download
- Customer signup, email verification and login
- Vendor applications and storefronts
- Admin vendor approval/featured controls
- Manufacturing order requests
- Vendor order dashboard
- Email notifications through optional SMTP

## Setup

1. Run `server/supabase/schema.sql` in Supabase SQL Editor.
2. Create `server/.env` from `server/.env.example` for local development.
3. Put your Supabase URL and server-only service-role key in `server/.env`.
4. Run `npm install` inside `server` and `client`.
5. Start backend with `npm run dev` inside `server`.
6. Start frontend with `npm run dev` inside `client`.

See `DEPLOYMENT.md` for Supabase, GitHub, Render and Netlify setup.
