import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectInfoCards, {
  ProjectHighlights,
  ProjectProblemApproach,
  ShineXFeaturePanels,
  ShineXLivePreview,
  ShineXPricing,
} from "@/components/ProjectInfoCards";
import { cardArt } from "@/components/ProjectCard";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.name} - QDeon Portfolio`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  const heroArt = cardArt[project.slug]?.src;
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="relative isolate min-h-screen">
      <Background />
      <Header />

      <ProjectHero project={project} heroArt={heroArt} />
      <ProjectInfoCards project={project} />
      {project.slug === "shinex" && <ShineXLivePreview project={project} />}
      {project.slug === "shinex" && <ShineXPricing project={project} />}
      <ProjectProblemApproach project={project} />
      <ProjectHighlights project={project} />
      {project.slug === "shinex" && <ShineXFeaturePanels />}

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
            Summary
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-6 sm:pb-24">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
            More projects
          </div>
          <Link
            href="/#projects"
            className="text-sm text-ink-300 transition-colors hover:text-ink-50"
          >
            See all -&gt;
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {others.map((p) => {
            const art = cardArt[p.slug];
            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="card-glow group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
              >
                <div className="relative h-40 overflow-hidden border-b border-white/10 bg-ink-900">
                  {art && (
                    <div className="absolute inset-0 grid place-items-center p-3">
                      <Image
                        src={art.src}
                        alt={p.name}
                        width={280}
                        height={180}
                        className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-base font-semibold text-ink-50">
                    {p.name}
                  </div>
                  <p className="mt-1 text-sm text-ink-400">{p.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
