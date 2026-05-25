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
  shinex: { src: "/assets/home/shinex_large_bucket_photo_area.png", objectFit: "cover" },
  "ai-ops-platform": { src: "/assets/home/ai_operations_dashboard_art.png", objectFit: "cover" },
  "ai-grant-agent": { src: "/assets/home/ai_grant_agent_icon_docs_telegram.png", objectFit: "contain" },
  "advertmarket-kz": { src: "/assets/home/advertmarket_cart.png", objectFit: "contain" },
  contentfarm: { src: "/assets/home/contentfarm_video_panel.png", objectFit: "contain" },
  robostar: { src: "/assets/home/robostar_device.png", objectFit: "contain" },
  "solvea-atelier": { src: "/assets/home/solvea_fur_photo.png", objectFit: "cover" },
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
        {/* Visual area */}
        <div
          className={`relative overflow-hidden ${isLarge ? "h-64 sm:h-72" : "h-40 sm:h-48"}`}
          style={{
            background: `linear-gradient(135deg, ${project.hero.from} 0%, ${project.hero.via} 55%, ${project.hero.to} 100%)`,
          }}
        >
          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
            }}
          />

          {/* Project art */}
          {art && (
            <div className="absolute inset-0">
              {art.objectFit === "cover" ? (
                <Image
                  src={art.src}
                  alt={project.name}
                  fill
                  sizes={isLarge ? "(min-width:1024px) 600px, 100vw" : "(min-width:1024px) 300px, 50vw"}
                  className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <Image
                    src={art.src}
                    alt={project.name}
                    width={isLarge ? 360 : 220}
                    height={isLarge ? 220 : 140}
                    className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
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
            <span className="font-mono text-[11px] text-white/70">
              {project.year}
            </span>
          </div>

          {/* Bottom gradient for legibility */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
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
