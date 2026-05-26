"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/12 text-emerald-300 border-emerald-400/28",
  MVP: "bg-amber-400/12 text-amber-200 border-amber-400/28",
  "In development": "bg-indigo-400/12 text-indigo-200 border-indigo-400/28",
  Prototype: "bg-cyan-400/12 text-cyan-200 border-cyan-400/28",
};

export const cardArt: Record<
  string,
  { src: string; objectFit?: "cover" | "contain" }
> = {
  shinex: { src: "/assets/project/shinex_live_preview.webp", objectFit: "cover" },
  "ai-ops-platform": {
    src: "/assets/home/ai_operations_dashboard_art.webp",
    objectFit: "contain",
  },
  "ai-grant-agent": {
    src: "/assets/preview/ai-grant-agent-preview.webp",
    objectFit: "cover",
  },
  "advertmarket-kz": {
    src: "/assets/preview/advertmarket-preview.webp",
    objectFit: "cover",
  },
  contentfarm: {
    src: "/assets/preview/contentfarm-preview.webp",
    objectFit: "cover",
  },
  robostar: { src: "/assets/preview/robostar-preview.webp", objectFit: "cover" },
  "solvea-atelier": {
    src: "/assets/preview/solvea-atelier-preview.webp",
    objectFit: "cover",
  },
};

export default function ProjectCard({
  project,
  variant = "small",
}: {
  project: Project;
  variant?: "large" | "small";
}) {
  const art = cardArt[project.slug];
  const isLarge = variant === "large";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="card-glow relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05]"
      >
        <div
          className={`relative overflow-hidden border-b border-white/10 bg-ink-900 ${
            isLarge ? "h-80 sm:h-96" : "h-56 sm:h-64"
          }`}
        >
          {art && (
            <div className="absolute inset-0">
              {art.objectFit === "cover" ? (
                <Image
                  src={art.src}
                  alt={project.name}
                  fill
                  sizes={
                    isLarge
                      ? "(min-width:1024px) 600px, 100vw"
                      : "(min-width:1024px) 300px, 50vw"
                  }
                  quality={86}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_62%)] p-5">
                  <Image
                    src={art.src}
                    alt={project.name}
                    width={isLarge ? 720 : 480}
                    height={isLarge ? 440 : 300}
                    sizes={
                      isLarge
                        ? "(min-width:1024px) 720px, 90vw"
                        : "(min-width:1024px) 480px, 50vw"
                    }
                    quality={86}
                    loading="lazy"
                    className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>
              )}
            </div>
          )}

          <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4 sm:p-5">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide backdrop-blur-md ${statusColor[project.status]}`}
            >
              {project.status}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 font-mono text-[11px] text-white/70 backdrop-blur-md">
              {project.year}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
            {project.category}
          </div>
          <h3 className="text-lg font-semibold text-ink-50 sm:text-xl">
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed text-ink-300">
            {project.tagline}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.slice(0, isLarge ? 5 : 3).map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-ink-200"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
            <span className="inline-flex items-center gap-1 text-ink-100 transition-transform group-hover:translate-x-0.5">
              Read case study
              <span className="transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </span>
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
