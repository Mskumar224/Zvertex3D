# Zvertex3D v2.5.0

## Homepage / visual refresh
- Reworked the homepage into a dark, premium manufacturing/technology visual system.
- Added rotating hero photography using the supplied Zvertex3D images.
- Added an interactive "What we do" category grid with filters.
- Added photo-backed categories for education/prototypes, caricatures/idols/collectibles, medical/dental, agriculture/site models, engineering/industrial, architecture/real estate, robotics/electronics and enterprise needs.
- Added animated real-work showcase using the supplied product photographs.
- Added dedicated STEM/robotics and medical/dental feature sections.
- Improved mobile-first layout, typography, buttons, cards, spacing and visual hierarchy.

## Netlify branding
- Confirmed there is no application-owned "Powered by Netlify" footer in the React source.
- Netlify's current badge is edge-injected by Netlify and must be disabled in the Netlify project settings.
- Exact steps are documented in `DEPLOYMENT.md`.

## Assets
All supplied images used by the homepage are stored under:
`client/public/showcase/`

## Validation
- Home JSX and key React files were syntax-checked successfully with the installed TypeScript parser.
- A full Vite build could not be executed in this environment because npm registry access is unavailable (`EAI_AGAIN`). Run `npm install` and `npm run build` locally or in Netlify CI.
