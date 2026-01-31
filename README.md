# Jerome Hunter Portfolio Website

A modern, dynamic portfolio website showcasing Jerome Hunter's work in UX/UI design, visual communication, and website development.

## Tech Stack

- React 18
- TypeScript
- Vite
- Framer Motion
- CSS Modules

## Features

- Bold hero section with large typography and dramatic header image
- Dark theme with high contrast styling
- Smooth animations (Framer Motion)
- Scroll-triggered reveal effects
- Responsive layout for desktop, tablet, and mobile

## Site Sections

1. Navigation (fixed header with smooth scroll links)
2. Hero
3. About (summary, stats, experience highlights)
4. Brands (logo showcase)
5. Portfolio (filterable categories)
   - Graphic Design (gallery)
   - Website Development (GitHub links)
   - UX/UI Design (Figma links)
6. Services
7. Contact

## Project Structure

Content is pulled from these folders:

- Personal info: `my-information/`
- Hero image: `images/header-image/`
- Brand logos: `images/logo-brands-worked-on/`
- Portfolio work:
  - `images/graphic-design/`
  - `images/website-development/`
  - `images/ux-ui-designs/`
  - (Optional) `images/photography/`

Component content lives here:

- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Services.tsx`
- `src/components/Portfolio.tsx`

Theme variables live here:

- `src/index.css`

## Local Development (VS Code)

### Prerequisites

- Node.js 18+ (recommended: Node 20)

Check versions:

```bash
node -v
npm -v
```

### Install

From the project root (the folder with `package.json`):

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Vite will print a local URL in the terminal (usually `http://localhost:5173`). Open it in your browser.

### Production build

```bash
npm run build
```

Build output is created in `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Update Portfolio Links

Update GitHub and Figma URLs inside:

- `src/components/Portfolio.tsx`

## Deploy

### Option A: GitHub Pages (recommended for this Vite static site)

1) Set the Vite base path so assets load correctly on Pages.

If your repo is `https://github.com/<user>/<repo>`, your Pages URL is:

`https://<user>.github.io/<repo>/`

Update `vite.config.ts` (or `vite.config.js`):

```ts
import { defineConfig } from "vite";

export default defineConfig({
  base: "/<repo>/",
});
```

2) Add this workflow file at `.github/workflows/deploy.yml`:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3) In GitHub: Repo Settings > Pages > Source: select **GitHub Actions**.

4) Push to `main`, then check the Actions tab for the deployed URL.

Notes:
- If you use React Router with clean URLs, GitHub Pages can 404 on refresh. Use `HashRouter` or add a SPA fallback.

### Option B: Vercel

Import the GitHub repo in Vercel. It will auto-detect Vite and deploy on every push.

### Option C: Netlify

Import the repo in Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

## Troubleshooting

- If `git push` is rejected, your remote has newer commits. Run:

```bash
git pull --rebase origin main
git push
```

- If images do not appear on GitHub Pages, confirm the Vite `base` setting matches the repo name.