import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

export default function ProjectsGrid() {
  const large = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mb-10 grid gap-6 border-t border-white/10 pt-8 sm:mb-14 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent-cyan">
            Selected work
          </div>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
            Built products, not portfolio exercises.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-ink-400 md:col-span-5 md:justify-self-end">
          Every case study connects the product problem to what shipped:
          workflow, stack, integration details, and market constraints.
        </p>
      </Reveal>

      <RevealStagger className="grid gap-5 md:grid-cols-2">
        {large.map((p) => (
          <RevealItem key={p.slug}>
            <ProjectCard project={p} variant="large" />
          </RevealItem>
        ))}
      </RevealStagger>

      <RevealStagger
        className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {rest.map((p) => (
          <RevealItem key={p.slug}>
            <ProjectCard project={p} variant="small" />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
