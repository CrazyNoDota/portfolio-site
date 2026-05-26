import Image from "next/image";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const features = [
  {
    icon: "/assets/home/icon_local_first_globe.webp",
    title: "Local-first",
    body: "RU/KK UX, Kazakhstan-aware integrations like Kaspi Pay, 2GIS, and 1C, built for the real market.",
  },
  {
    icon: "/assets/home/icon_payments_card.webp",
    title: "Payments and integrations",
    body: "Kaspi Pay, Stripe, Telegram, and AI providers wired into product flows where they actually help.",
  },
  {
    icon: "/assets/home/icon_ai_that_ships_sparkle.webp",
    title: "AI that ships",
    body: "Agents, scrapers, scoring models, and Telegram bots that run for real users, not just demos.",
  },
  {
    icon: "/assets/home/icon_end_to_end_rocket.webp",
    title: "End-to-end",
    body: "Discovery, design, code, infra, and the operating details after launch handled in one product loop.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mb-10 grid gap-6 border-t border-white/10 pt-8 sm:mb-14 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent-amber">
            About
          </div>
          <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
            A solo product studio based in Astana,{" "}
            <span className="font-display italic font-normal text-ink-300">
              built around practical markets and real workflows.
            </span>
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-ink-300 md:col-span-4 md:pt-8">
          <p>
            QDeon identifies painful workflows inside Kazakhstan-sized SMBs and
            rebuilds them as calm, AI-native products.
          </p>
          <p>
            That usually means Next.js, TypeScript, Russian-first UX, ops
            dashboards, Telegram automation, and payment flows that fit the
            local buying pattern.
          </p>
        </div>
      </Reveal>

      <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <RevealItem key={f.title}>
            <div className="card-glow group h-full rounded-lg border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={f.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div className="text-base font-semibold text-ink-50">
                {f.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {f.body}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-12 flex flex-col items-start justify-between gap-5 border-y border-white/10 py-6 md:flex-row md:items-center">
        <p className="max-w-2xl text-base leading-7 text-ink-300">
          The work is intentionally narrow: product surfaces for people who need
          bookings, leads, operations, education, and content systems to run
          better in this region.
        </p>
        <a
          href="mailto:myrentmobile@gmail.com"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent-amber/50 hover:bg-white/[0.08]"
        >
          Send a brief
          <span className="transition-transform group-hover:translate-x-1">
            -&gt;
          </span>
        </a>
      </Reveal>
    </section>
  );
}
