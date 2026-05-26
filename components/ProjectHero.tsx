"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as const;

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/12 text-emerald-300 border-emerald-400/28",
  MVP: "bg-amber-400/12 text-amber-200 border-amber-400/28",
  "In development": "bg-indigo-400/12 text-indigo-200 border-indigo-400/28",
  Prototype: "bg-cyan-400/12 text-cyan-200 border-cyan-400/28",
};

function Floater({
  src,
  alt,
  width,
  height,
  className,
  delay = 0,
  loop = "float-slow",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  delay?: number;
  loop?: "float-slow" | "float-med" | "drift" | "sparkle-twinkle";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.9, ease }}
      className={`pointer-events-none absolute gpu ${className}`}
    >
      <div className={`animate-${loop}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="h-auto w-full select-none drop-shadow-[0_14px_30px_rgba(0,0,0,0.42)]"
        />
      </div>
    </motion.div>
  );
}

export default function ProjectHero({
  project,
  heroArt,
}: {
  project: Project;
  heroArt?: string;
}) {
  const isShineX = project.slug === "shinex";

  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-10 border-t border-white/10 pt-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 flex flex-wrap items-center gap-2"
          >
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${statusColor[project.status]}`}
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-current align-middle" />
              {project.status}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
              {project.category}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
              / {project.year}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-5xl font-medium leading-[1.02] tracking-tight text-gradient sm:text-6xl lg:text-7xl"
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-8 text-ink-300 sm:text-lg"
          >
            {project.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-1.5"
          >
            {project.stack.slice(0, 6).map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-ink-100"
              >
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_14px_34px_-18px_rgba(255,255,255,0.9)] transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Visit live
                <span className="transition-transform group-hover:translate-x-1">
                  -&gt;
                </span>
              </a>
            )}
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:bg-white/[0.08]"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                &lt;-
              </span>
              Back to portfolio
            </Link>
          </motion.div>
        </div>

        <div className="relative h-[360px] sm:h-[440px] lg:col-span-6 lg:h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="absolute inset-0 grid place-items-center"
          >
            {isShineX ? (
              <div className="relative h-full w-full animate-float-slow">
                <Image
                  src="/assets/project/hero_mockup_group.webp"
                  alt="ShineX product mockup"
                  fill
                  sizes="(min-width:1024px) 600px, 100vw"
                  quality={90}
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                  priority
                />
              </div>
            ) : (
              heroArt && (
                <div className="relative h-full w-full animate-float-slow p-4">
                  <Image
                    src={heroArt}
                    alt={project.name}
                    fill
                    sizes="(min-width:1024px) 600px, 100vw"
                    quality={90}
                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                    priority
                  />
                </div>
              )
            )}
          </motion.div>

          <Floater
            src="/assets/project/sparkle_big_hero.webp"
            alt=""
            width={50}
            height={50}
            className="left-[8%] top-[10%] w-[24px] sm:w-[34px]"
            delay={0.7}
            loop="sparkle-twinkle"
          />
          <Floater
            src="/assets/project/sparkle_cluster_right.webp"
            alt=""
            width={50}
            height={48}
            className="right-[4%] top-[62%] w-[24px] sm:w-[36px]"
            delay={0.8}
            loop="sparkle-twinkle"
          />
        </div>
      </div>
    </section>
  );
}
