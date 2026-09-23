# emmanueloyekanlu.com

Personal / professional portfolio site for **Emmanuel Oyekanlu, Ph.D.** — Principal AI Engineer & Enterprise
Architect. Built with Next.js (static export), TypeScript, and Tailwind CSS, so it deploys identically to
**Vercel** or **Azure Static Web Apps** (or any static host) with zero platform-specific code.

## Stack

- **Next.js 16** (App Router), built as a fully static export (`output: "export"`) — no server runtime required.
- **TypeScript** + **Tailwind CSS v4**
- All content lives in `src/data/*.ts` (profile, experience, projects, publications, skills, credentials) —
  edit those files to update the site; no CMS needed.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Production build

```bash
npm run build      # outputs a fully static site to ./out
npx serve out       # preview the static export locally
```

---

## Deploying to Vercel (recommended)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and **import this repository**.
3. Vercel auto-detects Next.js — leave the default build settings (`next build`, output handled automatically)
   and click **Deploy**. Every push to `main` will auto-deploy from then on.
4. **Custom domain / registering `emmanueloyekanlu.com`:**
   - If you don't own the domain yet: in the Vercel project, go to **Settings → Domains**, type
     `emmanueloyekanlu.com`, and choose **Buy** — Vercel can register it for you directly (no separate registrar
     needed), and it auto-configures DNS + SSL.
   - If you already own it elsewhere: add the domain in **Settings → Domains**, then at your registrar add the
     DNS records Vercel shows you (typically an `A` record to `76.76.21.21` and a `CNAME` for `www` to
     `cname.vercel-dns.com`).

## Deploying to Azure Static Web Apps

1. In the [Azure Portal](https://portal.azure.com), create a new **Static Web App** resource.
2. Connect it to this GitHub repository during creation (Azure will offer to generate a GitHub Actions workflow
   automatically) — or use the included workflow at `.github/workflows/azure-static-web-apps.yml`:
   - Set repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN` (from the Static Web App resource's **Manage deployment token**).
   - Build settings: **App location** `/`, **Output location** `out`, **API location** — leave blank.
3. Push to `main` and the workflow builds (`npm run build`) and deploys the static `out/` folder.
4. **Custom domain:** In the Static Web App resource, go to **Custom domains → Add**, enter
   `emmanueloyekanlu.com`, and follow the `TXT`/`CNAME` (or `A`/`ALIAS`) validation records Azure provides at
   your domain registrar.

---

## Content structure

| File | Purpose |
| --- | --- |
| `src/data/profile.ts` | Name, title, summary, contact links, hero stats |
| `src/data/experience.ts` | Career timeline |
| `src/data/projects.ts` | Curated GitHub project portfolio, grouped by category, with optional embedded demo videos |
| `src/data/publications.ts` | Patent, book, and peer-reviewed publications |
| `src/data/skills.ts` | Skills grid |
| `src/data/credentials.ts` | Education, certifications, awards, voluntary activities |

`public/Emmanuel-Oyekanlu-Resume.pdf` is the downloadable résumé linked from the homepage — regenerate it by
editing and re-running the build script used to produce it if the résumé content changes.

## Analytics

**Vercel Analytics** is wired in (`@vercel/analytics`) and just needs one toggle: in the Vercel dashboard, go to
the project's **Analytics** tab and click **Enable**. No code changes or IDs needed — it starts collecting on
the next deploy.

**Google Analytics 4** is wired in but off by default (`src/components/GoogleAnalytics.tsx` renders nothing
until a Measurement ID is present). To enable it:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) → Admin → Create Property →
   add a **Web** data stream for `emmanueloyekanlu.com` → copy the **Measurement ID** (`G-XXXXXXXXXX`).
2. In Vercel: **Settings → Environment Variables**, add `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` for
   Production (and Preview if desired).
3. Redeploy (Vercel → Deployments → Redeploy, or push any commit) so the build picks up the new env var —
   `NEXT_PUBLIC_*` variables are inlined at build time for a static export.

For local development, copy `.env.example` to `.env.local` and fill in the ID there instead.

## Demo videos

Project demo videos are embedded via Google Drive `iframe` previews (see `src/components/VideoEmbed.tsx`).
For a video to play, its Google Drive sharing setting must be **"Anyone with the link" → Viewer**.
