import { projects } from "@/lib/projects";

export default function Marquee() {
  const items = [...projects, ...projects, ...projects];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-950/40 py-5">
      <div className="relative">
        <div className="flex w-max items-center gap-10 animate-marquee">
          {items.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${p.hero.from}, ${p.hero.to})`,
                }}
              />
              <span className="text-sm font-medium tracking-wide text-ink-200">
                {p.name}
              </span>
              <span className="text-ink-500">·</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
