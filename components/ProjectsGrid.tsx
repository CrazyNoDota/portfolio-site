import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-400">
            ◇ Selected work
          </div>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
            Seven products,
            <span className="font-display italic font-normal text-ink-300"> one builder.</span>
          </h2>
        </div>
        <p className="hidden max-w-sm text-sm text-ink-400 md:block">
          Each card is a working project — click to read the case study and see
          the stack, the problem, and what shipped.
        </p>
      </div>

      <div className="grid auto-rows-[minmax(0,1fr)] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} large={i === 0} />
        ))}
      </div>
    </section>
  );
}
