# Ansar — Portfolio

A single-page Next.js portfolio with per-project case-study pages.
Built with the Modern SaaS / Luxo visual direction: dark canvas, soft
gradient orbs, big tight headline, bento-style project grid.

## Featured projects

1. **ShineX** — Live cleaning marketplace (shinex.kz)
2. **AI Operations Platform** — AI workforce for SMBs
3. **AI Grant Agent** — Daily grant scouting with Telegram bot
4. **AdvertMarket KZ** — B2B marketplace for ad agencies
5. **ContentFarm** — Persona-driven short video automation (Electron)
6. **RoboStar** — Scratch-style IDE for LEGO EV3
7. **Solvea Atelier** — Premium fur coat boutique redesign

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 3
- Deployed on Vercel

## Local development

```bash
npm install        # or pnpm install / yarn
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel (1-click style)

### Option A — via Vercel dashboard (recommended)

1. Push this folder to a new GitHub repo (e.g. `ansar-portfolio`).
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no env vars needed.
4. Click **Deploy**.

### Option B — via CLI

```bash
npm install -g vercel
vercel              # one-time, links the project
vercel --prod
```

## Editing content

All project copy lives in `lib/projects.ts`. To add an eighth project,
just append a new entry to the `projects` array — a new route at
`/projects/<slug>` and a new card on the homepage are generated
automatically.

## Structure

```
app/
  layout.tsx
  page.tsx                  # homepage (hero + grid + about + footer)
  projects/[slug]/page.tsx  # per-project case study
  not-found.tsx
  globals.css

components/
  Background.tsx            # gradient orbs + grid + noise
  Header.tsx
  Hero.tsx
  Marquee.tsx               # project name strip
  ProjectsGrid.tsx
  ProjectCard.tsx
  About.tsx
  Footer.tsx

lib/
  projects.ts               # all project data
```

## Notes on the design references

- **getluxo.ai** — Borrowed the calm dark palette, tight display
  headline, marquee strip, soft section labels.
- **saaslandingpage.com** — Inspiration for SaaS-portfolio rhythm,
  bento sectioning, and direct "Visit live" CTAs.
- **shinex.kz** — Linked as the flagship live project.

## License

Personal portfolio. All third-party brand names belong to their owners.
