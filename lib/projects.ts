export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: "Live" | "MVP" | "In development" | "Prototype";
  year: string;
  liveUrl?: string;
  accent: "violet" | "cyan" | "amber" | "indigo" | "rose" | "emerald";
  icon: string; // single emoji or short string used in card thumb
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  highlights: string[];
  // Hero gradient stops (Tailwind-friendly hex values)
  hero: { from: string; via: string; to: string };
};

export const projects: Project[] = [
  {
    slug: "shinex",
    name: "ShineX",
    tagline: "Professional cleaning, booked in 60 seconds.",
    category: "Marketplace · Live",
    status: "Live",
    year: "2026",
    liveUrl: "https://shinex.kz",
    accent: "cyan",
    icon: "✦",
    summary:
      "A consumer cleaning service for Astana with same-day booking, multilingual UI (RU/KK/EN), and a vetted cleaner roster.",
    problem:
      "Booking a trusted cleaner in Kazakhstan used to mean calling friends or trawling Instagram. ShineX makes it as fast as ordering food.",
    approach: [
      "Designed a three-tier offer (maintenance, deep, post-renovation) with transparent pricing.",
      "Built a multilingual Next.js front-end with Kaspi-friendly checkout flow.",
      "Curated and verified cleaners with public profiles and ratings.",
    ],
    stack: ["Next.js", "Tailwind", "next-intl", "Supabase", "Kaspi Pay"],
    highlights: [
      "Live in Astana with daily bookings",
      "Three localized versions (RU / KK / EN)",
      "Mobile-first booking flow under 60 seconds",
    ],
    hero: { from: "#0f172a", via: "#155e75", to: "#22d3ee" },
  },
  {
    slug: "ai-ops-platform",
    name: "AI Operations Platform",
    tagline: "An AI workforce for SMBs in the CIS market.",
    category: "AI · B2B SaaS",
    status: "In development",
    year: "2026",
    accent: "violet",
    icon: "◐",
    summary:
      "A platform that wraps reliable AI workers around the boring back-office tasks at small and medium businesses — invoicing, scheduling, customer follow-ups, lead triage.",
    problem:
      "SMBs in Kazakhstan and the CIS can't justify hiring full-time operations staff, and most off-the-shelf SaaS is in English and built for US workflows.",
    approach: [
      "Multi-tenant workspace with role-scoped AI agents.",
      "Russian-first UX, Kazakhstan-aware integrations.",
      "Composable agent recipes the owner can edit without code.",
    ],
    stack: ["Next.js", "TypeScript", "pnpm workspaces", "PostgreSQL", "OpenAI / Anthropic"],
    highlights: [
      "Monorepo architecture for web + agent runtime",
      "Built for Kazakhstan-first integrations (Kaspi, 1C, 2GIS)",
      "Designed for non-technical owners",
    ],
    hero: { from: "#1e1b4b", via: "#5b21b6", to: "#a78bfa" },
  },
  {
    slug: "ai-grant-agent",
    name: "AI Grant Agent",
    tagline: "Daily grant scouting, scored by an AI that learns from your team.",
    category: "AI · Internal tool",
    status: "Live",
    year: "2026",
    accent: "amber",
    icon: "◆",
    summary:
      "An agent that scrapes federal, EU and UN grant portals every day, ranks each opportunity using past staff decisions, and ships shortlists into a Next.js dashboard and a Telegram bot.",
    problem:
      "Grant consultancies waste hours reading hundreds of new grant listings every week — and still miss the right ones.",
    approach: [
      "Crawlers per portal with normalized opportunity schema.",
      "Scoring model trained on past accept/reject decisions.",
      "Next.js dashboard plus Telegram bot for fast triage on mobile.",
    ],
    stack: ["Next.js", "FastAPI", "Supabase", "Telegram Bot API", "Vercel"],
    highlights: [
      "Daily scheduled scraping pipeline",
      "Active deployment on Vercel + Supabase",
      "Telegram-native review flow for staff",
    ],
    hero: { from: "#451a03", via: "#b45309", to: "#fbbf24" },
  },
  {
    slug: "advertmarket-kz",
    name: "AdvertMarket KZ",
    tagline: "Uber for outdoor advertising — connecting businesses to KZ ad agencies.",
    category: "Marketplace · B2B",
    status: "MVP",
    year: "2026",
    accent: "indigo",
    icon: "▲",
    summary:
      "A B2B marketplace where Kazakhstani business owners post signage and outdoor advertising jobs, and verified agencies bid to manufacture them.",
    problem:
      "There are ~500 ad agencies in Kazakhstan and tens of thousands of small businesses opening cafes, salons and shops. Matching them today is word-of-mouth chaos.",
    approach: [
      "Job posting flow tuned for non-technical owners.",
      "Agency console with bid management and previews.",
      "Bilingual (RU/KK) and Kaspi-payment ready.",
    ],
    stack: ["Next.js 15", "Tailwind", "next-intl", "Motion", "Zod"],
    highlights: [
      "Buyer + agency dual-sided console",
      "Designed for Kazakhstan-specific job types",
      "MVP scoped for fast pilot launch",
    ],
    hero: { from: "#1e1b4b", via: "#3730a3", to: "#818cf8" },
  },
  {
    slug: "contentfarm",
    name: "ContentFarm",
    tagline: "A desktop studio that drafts persona-driven short videos every day.",
    category: "AI · Desktop app",
    status: "MVP",
    year: "2026",
    accent: "rose",
    icon: "◉",
    summary:
      "An Electron app that pulls Kazakhstan-relevant chatter from Threads, X, and seed data once a day and renders TikTok/Reels-ready 9:16 MP4 drafts in the voice of a chosen persona.",
    problem:
      "Solo creators and small media teams burn out trying to keep a daily content cadence across multiple personas and platforms.",
    approach: [
      "Persona files define voice, taboos, and rendering style.",
      "Source adapters for Threads + X with offline seed fallback.",
      "Script + photo renderer outputs publish-ready MP4s.",
    ],
    stack: ["Electron", "React 19", "FFmpeg", "Vite", "OpenAI-compatible LLMs"],
    highlights: [
      "Once-a-day fully automated draft pipeline",
      "Persona-first architecture",
      "Local rendering — no cloud cost per video",
    ],
    hero: { from: "#3f1d38", via: "#9d174d", to: "#fb7185" },
  },
  {
    slug: "robostar",
    name: "RoboStar",
    tagline: "A Scratch-style IDE for LEGO EV3, in Russian, with an AI tutor.",
    category: "EdTech · Desktop",
    status: "Prototype",
    year: "2026",
    accent: "emerald",
    icon: "◇",
    summary:
      "An educational IDE that lets kids program LEGO Mindstorms EV3 robots with horizontal puzzle blocks and vertical containers — paired with an AI tutor that explains code in plain Russian.",
    problem:
      "EV3 is everywhere in CIS schools, but the original tooling is dated and English-first. Russian-language kids deserve a modern Scratch-quality experience.",
    approach: [
      "Custom block editor with EV3 hardware mental model.",
      "AI chat tutor wired through Vercel AI Gateway.",
      "Russian-first interface end to end.",
    ],
    stack: ["Next.js 16", "React 19", "Vercel AI Gateway", "Custom block engine"],
    highlights: [
      "Scratch-style block UX, EV3-native semantics",
      "Built-in AI helper for kids learning to code",
      "Russian UI throughout",
    ],
    hero: { from: "#022c22", via: "#047857", to: "#34d399" },
  },
  {
    slug: "solvea-atelier",
    name: "Solvea Atelier",
    tagline: "A premium boutique experience for fur coats and winter outerwear.",
    category: "Ecommerce · Concept",
    status: "Prototype",
    year: "2026",
    accent: "violet",
    icon: "❖",
    summary:
      "A redesign of a fur coat boutique away from editorial magazine spreads toward a refined, commerce-first luxury retail experience — fitting, alterations, and store visit clearly surfaced.",
    problem:
      "The original site felt like a fashion magazine. Customers couldn't compare items, see sizes, or plan a store visit without scrolling through editorial layouts.",
    approach: [
      "Catalog-first information architecture.",
      "Premium but quiet visual language — no theatrical typography.",
      "Trust details surfaced near purchase actions (alterations, fitting, contact).",
    ],
    stack: ["HTML", "CSS", "Vanilla JS", "Stitch design system"],
    highlights: [
      "Commerce-first redesign of an editorial site",
      "Designed for Astana customers",
      "Includes optional AR/try-on concept layer",
    ],
    hero: { from: "#1c1917", via: "#57534e", to: "#d6d3d1" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
