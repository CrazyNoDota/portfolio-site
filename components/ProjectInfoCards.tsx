import Image from "next/image";
import type { Project } from "@/lib/projects";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const ICON_MAP_PIN = "/assets/project/location_pin_icon.webp";
const ICON_GLOBE = "/assets/project/globe_icon.webp";
const ICON_CARD = "/assets/project/payment_card_icon.webp";
const ICON_DESKTOP = "/assets/project/desktop_platform_icon.webp";

type InfoCard = { icon: string; label: string; value: string };

function getInfoCards(p: Project): InfoCard[] {
  // Default cards — tuned per project where useful, otherwise derive from data
  if (p.slug === "shinex") {
    return [
      { icon: ICON_MAP_PIN, label: "Location", value: "Астана, KZ" },
      { icon: ICON_GLOBE, label: "Languages", value: "RU / KK / EN" },
      { icon: ICON_CARD, label: "Payments", value: "Kaspi Pay" },
      { icon: ICON_DESKTOP, label: "Hotline", value: p.phone ?? "Mobile + Desktop" },
    ];
  }
  return [
    { icon: ICON_MAP_PIN, label: "Region", value: "Kazakhstan / CIS" },
    { icon: ICON_GLOBE, label: "Status", value: p.status },
    { icon: ICON_CARD, label: "Category", value: p.category.split(" · ")[0] },
    { icon: ICON_DESKTOP, label: "Year", value: p.year },
  ];
}

export default function ProjectInfoCards({ project }: { project: Project }) {
  const cards = getInfoCards(project);
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-6 sm:pt-16">
      <RevealStagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" stagger={0.06}>
        {cards.map((c) => (
          <RevealItem key={c.label}>
            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                <Image src={c.icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  {c.label}
                </div>
                <div className="truncate text-sm font-semibold text-ink-50">
                  {c.value}
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

export function ProjectHighlights({ project }: { project: Project }) {
  const icons = [
    "/assets/project/highlight_language_icon.webp",
    "/assets/project/highlight_kaspi_icon.webp",
    "/assets/project/highlight_cleaner_icon.webp",
    "/assets/project/highlight_mobile_icon.webp",
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <Reveal className="mb-6 flex items-center gap-3">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
          ◇ Highlights
        </div>
        <span className="h-px flex-1 bg-white/5" />
      </Reveal>
      <RevealStagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4" stagger={0.06}>
        {project.highlights.map((h, i) => (
          <RevealItem key={h}>
            <div className="card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image src={icons[i % icons.length]} alt="" width={28} height={28} className="h-6 w-6 object-contain" />
              </div>
              <p className="text-sm leading-relaxed text-ink-200">{h}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

export function ProjectProblemApproach({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-glow h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-rose-300/80">
              ◇ Problem
            </div>
            <p className="text-base leading-relaxed text-ink-200 sm:text-lg">
              {project.problem}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-glow h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-emerald-300/80">
              ◇ Approach
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-ink-200 sm:text-lg">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ShineXLivePreview({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <Reveal className="mb-6 flex items-center gap-3">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
          ◇ Live in production
        </div>
        <span className="h-px flex-1 bg-white/5" />
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-300/80 transition-colors hover:text-cyan-200"
        >
          shinex.kz ↗
        </a>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-white/[0.03] to-transparent p-1.5 transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_30px_80px_-20px_rgba(34,211,238,0.4)] sm:p-2"
          >
            {/* Browser chrome */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-950">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-3 py-2.5 sm:px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                <div className="ml-3 hidden flex-1 items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-3 py-1 sm:flex">
                  <span className="text-[10px] text-emerald-300">●</span>
                  <span className="font-mono text-[11px] text-ink-300">https://shinex.kz</span>
                </div>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 sm:hidden">
                  shinex.kz
                </span>
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/project/shinex_live_preview.webp"
                  alt="ShineX live homepage"
                  fill
                  sizes="(min-width:1024px) 800px, 100vw"
                  quality={90}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>

            {/* Floating accent */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4">
          <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
              The real product
            </div>
            <p className="text-base leading-relaxed text-ink-200 sm:text-lg">
              Shipping daily bookings in Astana. Built for fast checkout on
              mobile, with Kaspi-friendly payments and a multilingual UI.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">City</div>
                <div className="mt-0.5 font-semibold text-ink-50">Астана</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">Languages</div>
                <div className="mt-0.5 font-semibold text-ink-50">RU · KK · EN</div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-3 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-6px_rgba(34,211,238,0.55)] transition-all hover:scale-[1.02]"
              >
                Open shinex.kz
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
              {project.phone && (
                <a
                  href={`tel:${project.phone.replace(/[^+0-9]/g, "")}`}
                  className="group inline-flex items-center justify-between gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-rose-300">●</span>
                    {project.phone}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-ink-200">
                    Call
                  </span>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ShineXPricing({ project }: { project: Project }) {
  if (!project.services?.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <Reveal className="mb-6 flex items-center gap-3">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
          ◇ Service tiers
        </div>
        <span className="h-px flex-1 bg-white/5" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
          {project.services.length} options · KZT
        </span>
      </Reveal>

      <RevealStagger className="grid gap-4 sm:gap-5 md:grid-cols-3" stagger={0.08}>
        {project.services.map((s, i) => (
          <RevealItem key={s.name}>
            <div
              className={`card-glow group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 sm:p-7 ${
                i === 0 ? "md:border-cyan-300/25" : ""
              }`}
            >
              {/* Subtle accent bar */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">
                  Tier 0{i + 1}
                </div>
                {i === 0 && (
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                    Most booked
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-ink-50 sm:text-2xl">
                {s.name}
              </h3>
              {s.note && (
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  {s.note}
                </div>
              )}

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl">
                  {s.priceFrom.replace(/^от\s*/, "")}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  starting
                </span>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 text-sm text-ink-100 transition-colors group-hover:text-cyan-200"
              >
                Book on shinex.kz
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

export function ShineXFeaturePanels() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <Reveal className="mb-6 flex items-center gap-3">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
          ◇ Inside the product
        </div>
        <span className="h-px flex-1 bg-white/5" />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/25 sm:p-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
              Booking flow
            </div>
            <h3 className="text-xl font-semibold text-ink-50">
              From service → date → Kaspi in under 60 seconds
            </h3>
            <div className="mt-4">
              <Image
                src="/assets/project/booking_flow_ui_closeup.webp"
                alt="Booking flow UI closeup"
                width={870}
                height={444}
                className="h-auto w-full rounded-2xl border border-white/5"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-3 -left-3 w-[90px] animate-float-slow sm:w-[110px]">
              <Image src="/assets/project/cleaning_bucket_bottom_left.webp" alt="" width={110} height={100} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/25 sm:p-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-amber-300/80">
              Order tracking
            </div>
            <h3 className="text-xl font-semibold text-ink-50">
              Real-time cleaner ETA on a Kazakhstan-aware map
            </h3>
            <div className="mt-4">
              <Image
                src="/assets/project/order_tracking_ui_closeup.webp"
                alt="Order tracking UI closeup"
                width={870}
                height={492}
                className="h-auto w-full rounded-2xl border border-white/5"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-2 -right-2 w-[70px] animate-float-med sm:w-[90px]">
              <Image src="/assets/project/bell_bottom_right.webp" alt="" width={90} height={80} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
