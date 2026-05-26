export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: "Live" | "MVP" | "In development" | "Prototype";
  year: string;
  liveUrl?: string;
  accent: "violet" | "cyan" | "amber" | "indigo" | "rose" | "emerald";
  icon: string;
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  highlights: string[];
  hero: { from: string; via: string; to: string };
  phone?: string;
  services?: Array<{ name: string; priceFrom: string; note?: string }>;
};

export const projects: Project[] = [
  {
    slug: "shinex",
    name: "ShineX",
    tagline: "Professional cleaning, booked in 60 seconds.",
    category: "Marketplace / Live",
    status: "Live",
    year: "2026",
    liveUrl: "https://shinex.kz",
    accent: "cyan",
    icon: "*",
    summary:
      "A consumer cleaning service for Astana with same-day booking, multilingual UX, and a vetted cleaner roster.",
    problem:
      "Booking a trusted cleaner in Kazakhstan often means calling friends or searching Instagram. ShineX makes it as fast as ordering food.",
    approach: [
      "Designed a three-tier offer with transparent pricing.",
      "Built a multilingual Next.js front end with a Kaspi-friendly checkout flow.",
      "Curated cleaner profiles around trust, availability, and repeat bookings.",
    ],
    stack: ["Next.js", "Tailwind", "next-intl", "Supabase", "Kaspi Pay"],
    highlights: [
      "Live in Astana with daily bookings",
      "Three localized versions: RU, KK, and EN",
      "Mobile-first booking flow under 60 seconds",
    ],
    hero: { from: "#0f172a", via: "#0f766e", to: "#2dd4bf" },
    phone: "+7 (700) 301-84-05",
    services: [
      {
        name: "Apartment cleaning",
        priceFrom: "from 12,750 KZT",
        note: "Maintenance and deep cleaning",
      },
      {
        name: "House cleaning",
        priceFrom: "from 15,500 KZT",
        note: "Larger homes and recurring visits",
      },
      {
        name: "Cottage cleaning",
        priceFrom: "from 18,000 KZT",
        note: "Large-space service tiers",
      },
    ],
  },
  {
    slug: "ai-ops-platform",
    name: "AI Operations Platform",
    tagline: "An AI workforce for SMBs in the CIS market.",
    category: "AI / B2B SaaS",
    status: "In development",
    year: "2026",
    accent: "violet",
    icon: "o",
    summary:
      "A platform that wraps reliable AI workers around back-office tasks at small and medium businesses: invoicing, scheduling, follow-ups, and lead triage.",
    problem:
      "SMBs in Kazakhstan and the CIS often cannot justify full-time operations staff, while off-the-shelf SaaS is English-first and tuned for US workflows.",
    approach: [
      "Multi-tenant workspace with role-scoped AI agents.",
      "Russian-first UX and Kazakhstan-aware integrations.",
      "Composable agent recipes the owner can edit without code.",
    ],
    stack: ["Next.js", "TypeScript", "pnpm workspaces", "PostgreSQL", "OpenAI / Anthropic"],
    highlights: [
      "Monorepo architecture for web and agent runtime",
      "Built for Kazakhstan-first integrations: Kaspi, 1C, and 2GIS",
      "Designed for non-technical owners",
    ],
    hero: { from: "#172033", via: "#2f3b4a", to: "#8b5cf6" },
  },
  {
    slug: "ai-grant-agent",
    name: "AI Grant Agent",
    tagline: "Daily grant scouting, scored by an AI that learns from your team.",
    category: "AI / Internal tool",
    status: "Live",
    year: "2026",
    accent: "amber",
    icon: "d",
    summary:
      "An agent that scrapes federal, EU, and UN grant portals every day, ranks each opportunity from past staff decisions, and sends shortlists into a dashboard and Telegram bot.",
    problem:
      "Grant consultancies spend hours reading new listings every week and still miss relevant opportunities.",
    approach: [
      "Crawlers per portal with a normalized opportunity schema.",
      "Scoring model trained on past accept and reject decisions.",
      "Next.js dashboard plus Telegram bot for fast mobile triage.",
    ],
    stack: ["Next.js", "FastAPI", "Supabase", "Telegram Bot API", "Vercel"],
    highlights: [
      "Daily scheduled scraping pipeline",
      "Active deployment on Vercel and Supabase",
      "Telegram-native review flow for staff",
    ],
    hero: { from: "#2b2111", via: "#8a5a19", to: "#f4b24d" },
  },
  {
    slug: "advertmarket-kz",
    name: "AdvertMarket KZ",
    tagline: "A marketplace connecting businesses to KZ advertising agencies.",
    category: "Marketplace / B2B",
    status: "MVP",
    year: "2026",
    accent: "indigo",
    icon: "^",
    summary:
      "A B2B marketplace where Kazakhstani business owners post signage and outdoor advertising jobs, and verified agencies bid to manufacture them.",
    problem:
      "Kazakhstan has hundreds of ad agencies and thousands of new small businesses, but matching them still happens through messy word of mouth.",
    approach: [
      "Job posting flow tuned for non-technical owners.",
      "Agency console with bid management and previews.",
      "Bilingual UX and Kaspi-payment readiness.",
    ],
    stack: ["Next.js 15", "Tailwind", "next-intl", "Motion", "Zod"],
    highlights: [
      "Buyer and agency consoles",
      "Designed for Kazakhstan-specific job types",
      "MVP scoped for fast pilot launch",
    ],
    hero: { from: "#111827", via: "#3730a3", to: "#818cf8" },
  },
  {
    slug: "contentfarm",
    name: "ContentFarm",
    tagline: "A desktop studio that drafts persona-driven short videos every day.",
    category: "AI / Desktop app",
    status: "MVP",
    year: "2026",
    accent: "rose",
    icon: "@",
    summary:
      "An Electron app that pulls Kazakhstan-relevant chatter from social sources and seed data, then renders TikTok and Reels-ready video drafts in a chosen persona voice.",
    problem:
      "Solo creators and small media teams burn out trying to keep a daily content cadence across multiple personas and platforms.",
    approach: [
      "Persona files define voice, taboos, and rendering style.",
      "Source adapters with offline seed fallback.",
      "Script and photo renderer outputs publish-ready MP4s.",
    ],
    stack: ["Electron", "React 19", "FFmpeg", "Vite", "OpenAI-compatible LLMs"],
    highlights: [
      "Once-a-day automated draft pipeline",
      "Persona-first architecture",
      "Local rendering with no cloud cost per video",
    ],
    hero: { from: "#2b1721", via: "#9d174d", to: "#fb7185" },
  },
  {
    slug: "robostar",
    name: "RoboStar",
    tagline: "A Scratch-style IDE for LEGO EV3, in Russian, with an AI tutor.",
    category: "EdTech / Desktop",
    status: "Prototype",
    year: "2026",
    accent: "emerald",
    icon: "#",
    summary:
      "An educational IDE that lets kids program LEGO Mindstorms EV3 robots with puzzle blocks and an AI tutor that explains code in plain Russian.",
    problem:
      "EV3 is common in CIS schools, but the original tooling is dated and English-first. Russian-language students deserve a modern learning experience.",
    approach: [
      "Custom block editor with EV3 hardware semantics.",
      "AI chat tutor wired through Vercel AI Gateway.",
      "Russian-first interface from onboarding to debugging.",
    ],
    stack: ["Next.js 16", "React 19", "Vercel AI Gateway", "Custom block engine"],
    highlights: [
      "Scratch-style block UX with EV3-native semantics",
      "Built-in AI helper for kids learning to code",
      "Russian UI throughout",
    ],
    hero: { from: "#022c22", via: "#047857", to: "#34d399" },
  },
  {
    slug: "solvea-atelier",
    name: "Solvea Atelier",
    tagline: "A premium boutique experience for fur coats and winter outerwear.",
    category: "Ecommerce / Concept",
    status: "Prototype",
    year: "2026",
    accent: "violet",
    icon: "+",
    summary:
      "A redesign of a fur coat boutique from editorial magazine spreads toward a refined, commerce-first luxury retail experience.",
    problem:
      "The original site felt like a fashion magazine. Customers could not compare items, see sizes, or plan a store visit without scrolling through editorial layouts.",
    approach: [
      "Catalog-first information architecture.",
      "Premium but quiet visual language with clear product comparison.",
      "Trust details surfaced near purchase actions: alterations, fitting, and contact.",
    ],
    stack: ["HTML", "CSS", "Vanilla JS", "Stitch design system"],
    highlights: [
      "Commerce-first redesign of an editorial site",
      "Designed for Astana customers",
      "Includes optional AR try-on concept layer",
    ],
    hero: { from: "#1c1917", via: "#57534e", to: "#d6d3d1" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
