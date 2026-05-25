import Image from "next/image";
import type { Project } from "@/lib/projects";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

type InfoCard = { icon: string; label: string; value: string };

function getInfoCards(p: Project): InfoCard[] {
  // Default cards — tuned per project where useful, otherwise derive from data
  if (p.slug === "shinex") {
    return [
      { icon: "/assets/project/location_pin_icon.png", label: "Location", value: "Astana, KZ" },
      { icon: "/assets/project/globe_icon.png", label: "Languages", value: "RU / KK / EN" },
      { icon: "/assets/project/payment_card_icon.png", label: "Payments", value: "Kaspi Pay" },
      { icon: "/assets/project/desktop_platform_icon.png", label: "Platform", value: "Mobile + Desktop" },
    ];
  }
  return [
    { icon: "/assets/project/location_pin_icon.png", label: "Region", value: "Kazakhstan / CIS" },
    { icon: "/assets/project/globe_icon.png", label: "Status", value: p.status },
    { icon: "/assets/project/payment_card_icon.png", label: "Category", value: p.category.split(" · ")[0] },
    { icon: "/assets/project/desktop_platform_icon.png", label: "Year", value: p.year },
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
    "/assets/project/highlight_language_icon.png",
    "/assets/project/highlight_kaspi_icon.png",
    "/assets/project/highlight_cleaner_icon.png",
    "/assets/project/highlight_mobile_icon.png",
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
                src="/assets/project/booking_flow_ui_closeup.png"
                alt="Booking flow UI closeup"
                width={870}
                height={444}
                className="h-auto w-full rounded-2xl border border-white/5"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-3 -left-3 w-[90px] animate-float-slow sm:w-[110px]">
              <Image src="/assets/project/cleaning_bucket_bottom_left.png" alt="" width={110} height={100} />
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
                src="/assets/project/order_tracking_ui_closeup.png"
                alt="Order tracking UI closeup"
                width={870}
                height={492}
                className="h-auto w-full rounded-2xl border border-white/5"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-2 -right-2 w-[70px] animate-float-med sm:w-[90px]">
              <Image src="/assets/project/bell_bottom_right.png" alt="" width={90} height={80} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
