"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  MVP: "bg-amber-400/15 text-amber-200 border-amber-400/30",
  "In development": "bg-violet-400/15 text-violet-200 border-violet-400/30",
  Prototype: "bg-cyan-400/15 text-cyan-200 border-cyan-400/30",
};

// Per-project artwork mapping (lives in public/assets/home/)
export const cardArt: Record<string, { src: string; objectFit?: "cover" | "contain"; bgFrom?: string; bgTo?: string }> = {
  shinex: { src: "/assets/project/hero_mockup_group.webp", objectFit: "contain" },
  "ai-ops-platform": { src: "/assets/home/ai_operations_dashboard_art.webp", objectFit: "contain" },
  "ai-grant-agent": { src: "/assets/home/ai_grant_agent_icon_docs_telegram.webp", objectFit: "contain" },
  "advertmarket-kz": { src: "/assets/home/advertmarket_cart.webp", objectFit: "contain" },
  contentfarm: { src: "/assets/home/contentfarm_video_panel.webp", objectFit: "contain" },
  robostar: { src: "/assets/home/robostar_device.webp", objectFit: "contain" },
  "solvea-atelier": { src: "/assets/home/solvea_fur_photo.webp", objectFit: "cover" },
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`card-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/25`}
      >
        {/* Visual area — flat dark surface */}
        <div
          className={`relative overflow-hidden bg-ink-900 ${isLarge ? "h-80 sm:h-96" : "h-56 sm:h-64"}`}
        >
          {/* Project art */}
          {art && (
            <div className="absolute inset-0">
              {art.objectFit === "cover" ? (
                <Image
                  src={art.src}
                  alt={project.name}
                  fill
                  sizes={isLarge ? "(min-width:1024px) 600px, 100vw" : "(min-width:1024px) 300px, 50vw"}
                  quality={85}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center p-3">
                  <Image
                    src={art.src}
                    alt={project.name}
                    width={isLarge ? 720 : 480}
                    height={isLarge ? 440 : 300}
                    sizes={isLarge ? "(min-width:1024px) 720px, 90vw" : "(min-width:1024px) 480px, 50vw"}
                    quality={85}
                    loading="lazy"
                    className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              )}
            </div>
          )}

          {/* Top row: status + year */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide backdrop-blur-md ${statusColor[project.status]}`}
            >
              {project.status}
            </span>
            <span className="font-mono text-[11px] text-white/60">
              {project.year}
            </span>
          </div>
        </div>

        {/* Text content */}
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
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-ink-200"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1 text-ink-100 transition-transform group-hover:translate-x-0.5">
              Read case study
              <span className="transition-transform group-hover:translate-x-1">
                →
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
    </motion.div>
  );
}
