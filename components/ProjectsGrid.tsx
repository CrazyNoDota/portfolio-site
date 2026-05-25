import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

export default function ProjectsGrid() {
  // Bento layout: first two are large (ShineX, AI Ops), remaining are small
  const large = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
            ◇ Selected work
          </div>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
            Projects
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink-400">
          Each card is a working project — click through for the full case
          study with stack, problem, and what shipped.
        </p>
      </Reveal>

      {/* Top: two feature cards */}
      <RevealStagger className="grid gap-5 md:grid-cols-2">
        {large.map((p) => (
          <RevealItem key={p.slug}>
            <ProjectCard project={p} variant="large" />
          </RevealItem>
        ))}
      </RevealStagger>

      {/* Bottom: smaller cards */}
      <RevealStagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {rest.map((p) => (
          <RevealItem key={p.slug}>
            <ProjectCard project={p} variant="small" />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
