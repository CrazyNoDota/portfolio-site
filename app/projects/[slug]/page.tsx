import { notFound } from "next/navigation";
import Link from "next/link";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    title: `${project.name} — Ansar Portfolio`,
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

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="relative isolate min-h-screen">
      <Background />
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-ink-100"
        >
          ← Back to all projects
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-400">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-ink-200">
            {project.status}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-medium tracking-tight text-gradient sm:text-5xl md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-300 sm:text-xl">
          {project.tagline}
        </p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Visit the live site ↗
          </a>
        )}
      </section>

      {/* Visual banner */}
      <section className="mx-auto max-w-5xl px-6">
        <div
          className="relative h-72 overflow-hidden rounded-3xl border border-white/10 sm:h-96"
          style={{
            background: `linear-gradient(135deg, ${project.hero.from} 0%, ${project.hero.via} 55%, ${project.hero.to} 100%)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
            }}
          />
          <span className="absolute -bottom-12 -right-6 select-none font-display text-[360px] leading-none text-white/15">
            {project.icon}
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-white/70">
              {project.slug}
            </div>
          </div>
        </div>
      </section>

      {/* Body: summary + sidebar */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8 space-y-10">
            <Block label="Summary">
              <p>{project.summary}</p>
            </Block>

            <Block label="The problem">
              <p>{project.problem}</p>
            </Block>

            <Block label="Approach">
              <ul className="space-y-3">
                {project.approach.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="Highlights">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-ink-200"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="md:col-span-4 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">
                Tech stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">
                Quick facts
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-400">Status</dt>
                  <dd className="text-ink-100">{project.status}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-400">Year</dt>
                  <dd className="text-ink-100">{project.year}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-400">Category</dt>
                  <dd className="text-right text-ink-100">{project.category}</dd>
                </div>
                {project.liveUrl && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-400">Live</dt>
                    <dd>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent-cyan hover:underline"
                      >
                        {project.liveUrl.replace(/^https?:\/\//, "")}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Other projects */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.18em] text-ink-400">
            ◇ More projects
          </div>
          <Link
            href="/#projects"
            className="text-sm text-ink-300 hover:text-ink-50"
          >
            See all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {otherProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="card-glow group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20"
            >
              <span
                className="mb-4 grid h-10 w-10 place-items-center rounded-lg text-lg"
                style={{
                  background: `linear-gradient(135deg, ${p.hero.from}, ${p.hero.to})`,
                }}
              >
                {p.icon}
              </span>
              <div className="text-base font-semibold text-ink-50">{p.name}</div>
              <p className="mt-1 text-sm text-ink-400">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">
        ◇ {label}
      </div>
      <div className="text-base leading-relaxed text-ink-200 sm:text-lg">
        {children}
      </div>
    </div>
  );
}
