import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  MVP: "bg-amber-400/15 text-amber-200 border-amber-400/30",
  "In development": "bg-violet-400/15 text-violet-200 border-violet-400/30",
  Prototype: "bg-cyan-400/15 text-cyan-200 border-cyan-400/30",
};

export default function ProjectCard({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`card-glow group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 ${
        large ? "row-span-2" : ""
      }`}
    >
      {/* Visual area */}
      <div
        className={`relative overflow-hidden ${large ? "h-72" : "h-44"}`}
        style={{
          background: `linear-gradient(135deg, ${project.hero.from} 0%, ${project.hero.via} 55%, ${project.hero.to} 100%)`,
        }}
      >
        {/* Faint grid */}
        <div className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        {/* Big glyph */}
        <span className="absolute -bottom-6 -right-4 select-none font-display text-[220px] leading-none text-white/15 transition-transform duration-500 group-hover:translate-x-[-8px] group-hover:translate-y-[-6px]">
          {project.icon}
        </span>
        {/* Top-left status */}
        <div className="relative z-10 flex items-start justify-between p-5">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${statusColor[project.status]}`}
          >
            {project.status}
          </span>
          <span className="font-mono text-[11px] text-white/60">
            {project.year}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
          {project.category}
        </div>
        <h3 className="text-xl font-semibold text-ink-50">{project.name}</h3>
        <p className="text-sm leading-relaxed text-ink-300">{project.tagline}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-ink-200"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 text-sm">
          <span className="text-ink-100 transition-transform group-hover:translate-x-0.5">
            Read case study →
          </span>
          {project.liveUrl && (
            <span className="text-ink-400">· Live</span>
          )}
        </div>
      </div>
    </Link>
  );
}
