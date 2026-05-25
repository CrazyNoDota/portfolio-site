import { projects } from "@/lib/projects";

export default function Marquee() {
  const items = [...projects, ...projects]; // duplicate for seamless loop
  return (
    <section className="relative border-y border-white/5 bg-ink-950/40 py-6 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-400">
          <span className="h-px flex-1 bg-white/5" />
          shipped &amp; in flight
          <span className="h-px flex-1 bg-white/5" />
        </div>
      </div>
      <div className="relative">
        <div className="flex w-max gap-12 animate-marquee">
          {items.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap text-ink-300"
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-md text-sm"
                style={{
                  background: `linear-gradient(135deg, ${p.hero.from}, ${p.hero.to})`,
                  color: "#fff",
                }}
              >
                {p.icon}
              </span>
              <span className="text-sm font-medium text-ink-100">{p.name}</span>
              <span className="text-xs text-ink-400">— {p.category}</span>
            </div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
