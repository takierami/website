# Taki Eddine Rami — Portfolio

Full-stack web developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Includes a services/pricing page, project showcase, experience timeline, a Web3Forms-powered contact form, and Calendly booking.

## Tech stack

- **Framework:** React 18 + React Router 7
- **Language:** TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (Framer Motion)
- **Forms:** Web3Forms
- **Hosting:** Netlify

## Getting started

Install dependencies (this project uses pnpm):

```bash
pnpm install
```

Create your local environment file by copying the example, then fill in your keys:

```bash
cp .env.example .env
```

Start the dev server:

```bash
pnpm run dev
```

Open http://localhost:5173.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SITE_URL` | Yes | Canonical production URL (e.g. `https://takirami.dev`) |
| `VITE_WEB3FORMS_KEY` | Yes | Web3Forms access key for the contact form ([get one here](https://web3forms.com)) |
| `VITE_PLAUSIBLE_DOMAIN` | No | Domain for privacy-friendly Plausible analytics |
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics measurement ID (used only if Plausible is unset) |

> `VITE_*` variables are baked in at build time. Set them before building/deploying.
> Never commit `.env` — it is gitignored.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start the dev server |
| `pnpm run build` | Type-check and build to `dist/` |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run typecheck` | Run TypeScript type checking |

## Deployment (Netlify)

### 1. Connect the repo

Push to GitHub and connect the repository in Netlify. Build settings are in [`netlify.toml`](netlify.toml):

- **Build command:** `pnpm run build`
- **Publish directory:** `dist`
- **Node version:** 20 (via `.nvmrc` and `netlify.toml`)

Netlify auto-detects pnpm from `pnpm-lock.yaml`.

### 2. Set environment variables (required before first deploy)

In **Site settings → Environment variables**, add:

| Variable | Value |
|----------|-------|
| `VITE_SITE_URL` | `https://takirami.dev` (or your custom domain) |
| `VITE_WEB3FORMS_KEY` | Your Web3Forms access key |

Optional analytics (pick one):

| Variable | Value |
|----------|-------|
| `VITE_PLAUSIBLE_DOMAIN` | `takirami.dev` |
| `VITE_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` |

> `VITE_*` variables are embedded at **build time**. After changing them, trigger a new deploy.

### 3. Custom domain (optional)

Point your domain DNS to Netlify, then set it as the primary domain in Netlify. Update `VITE_SITE_URL` to match.

### 4. Pre-deploy checklist

- [ ] All source files committed (especially `public/` favicons, `og-image.png`, `robots.txt`, `sitemap.xml`)
- [ ] `.env` is **not** committed (gitignored)
- [ ] `VITE_WEB3FORMS_KEY` set in Netlify
- [ ] `VITE_SITE_URL` matches your live domain
- [ ] Local build passes: `pnpm run build`
- [ ] After deploy: test `/contact` form, `/favicon.ico`, and deep links like `/projects`

SPA routing, security headers, and asset caching are handled by `netlify.toml`.

## Project structure

```
public/            Static assets, robots.txt, sitemap.xml, OG image
src/
  app/
    components/    UI and feature components
    config/        Site config (site.ts)
    data/          Portfolio content (mockData.ts)
    hooks/         Reusable hooks (SEO, GitHub, in-view, etc.)
    pages/         Route pages
    utils/         Analytics and helpers
    routes.tsx     Route + lazy-loading setup
```

## Editing content

Most portfolio content lives in [`src/app/data/mockData.ts`](src/app/data/mockData.ts) (projects, experience, skills, social links) and [`src/app/config/site.ts`](src/app/config/site.ts) (name, URLs, email, Calendly link).
# Updated-Website
