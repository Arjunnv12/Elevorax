<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4ff23fa1-e8ae-4d12-a7d6-d1a421955ce5

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Project structure (styles modularization)

This project was refactored to modularize styles so each major section and component
has its own CSS file. Key locations:

- `src/styles/sections/` — per-section CSS (About.css, Courses.css, Reviews.css)
- `src/styles/home/` — hero and home-related component CSS (HeroIntro.css, LevelSidebar.css, ElevatorScene.css)
- `src/styles/layout/` — layout components (Navbar.css, Footer.css)
- `src/styles/modals/` — modal-specific styles (EnrollModal.css, DemoModal.css)

How it works:

- Each component imports its local CSS file at the top of the component file.
- Global/shared styles remain in `src/styles/components.css`, `variables.css`, and `animations.css`.

If you want all styles merged back later, the per-component files are intentionally small and can be consolidated.

Commit note: per-component CSS files were added and components updated to import them.
