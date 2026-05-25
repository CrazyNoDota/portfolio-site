"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as const;

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  MVP: "bg-amber-400/15 text-amber-200 border-amber-400/30",
  "In development": "bg-violet-400/15 text-violet-200 border-violet-400/30",
  Prototype: "bg-cyan-400/15 text-cyan-200 border-cyan-400/30",
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
      initial={{ opacity: 0, scale: 0.7 }}
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
          className="h-auto w-full select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
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
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left: copy */}
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
              · {project.year}
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
            className="mt-5 max-w-xl text-base text-ink-300 sm:text-lg"
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
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-100"
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
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_6px_30px_-6px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.04]"
              >
                Visit live
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            )}
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:scale-[1.04] hover:border-white/30 hover:bg-white/10"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right: visual mockup composition */}
        <div className="relative h-[360px] sm:h-[440px] lg:col-span-6 lg:h-[480px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="absolute inset-0 grid place-items-center"
          >
            {isShineX ? (
              <>
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/project/laptop_dashboard_mockup.png"
                    alt="ShineX dashboard"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute right-2 top-6 w-[120px] sm:right-6 sm:top-10 sm:w-[150px] lg:w-[170px]">
                  <Image
                    src="/assets/project/mobile_booking_mockup.png"
                    alt=""
                    width={170}
                    height={340}
                    className="h-auto w-full animate-float-med drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                  />
                </div>
                <div className="absolute left-[10%] top-[35%] w-[120px] animate-float-slow sm:w-[150px]">
                  <Image
                    src="/assets/project/floating_upcoming_booking_card.png"
                    alt=""
                    width={170}
                    height={150}
                    className="h-auto w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)]"
                  />
                </div>
                <div className="absolute bottom-[18%] left-[30%] w-[130px] animate-float-med sm:w-[160px]">
                  <Image
                    src="/assets/project/floating_kaspi_payment_card.png"
                    alt=""
                    width={170}
                    height={90}
                    className="h-auto w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </>
            ) : (
              heroArt && (
                <div className="relative h-full w-full p-4">
                  <Image
                    src={heroArt}
                    alt={project.name}
                    fill
                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                    priority
                  />
                </div>
              )
            )}
          </motion.div>

          {/* Decorative floaters */}
          <Floater
            src="/assets/project/sparkle_big_hero.png"
            alt=""
            width={50}
            height={50}
            className="left-[18%] top-[14%] w-[28px] sm:w-[40px]"
            delay={0.7}
            loop="sparkle-twinkle"
          />
          <Floater
            src="/assets/project/sparkle_small_hero.png"
            alt=""
            width={28}
            height={28}
            className="left-[24%] top-[8%] w-[16px] sm:w-[22px]"
            delay={0.9}
            loop="sparkle-twinkle"
          />
          <Floater
            src="/assets/project/sparkle_cluster_right.png"
            alt=""
            width={50}
            height={48}
            className="right-[6%] top-[58%] w-[28px] sm:w-[40px]"
            delay={0.8}
            loop="sparkle-twinkle"
          />
          {isShineX && (
            <>
              <Floater
                src="/assets/project/cleaning_brush_left.png"
                alt=""
                width={100}
                height={120}
                className="-left-2 bottom-4 w-[60px] sm:w-[90px]"
                delay={0.6}
                loop="float-slow"
              />
              <Floater
                src="/assets/project/blue_orb_left.png"
                alt=""
                width={50}
                height={50}
                className="left-[14%] bottom-[10%] w-[28px] sm:w-[40px]"
                delay={0.85}
                loop="drift"
              />
              <Floater
                src="/assets/project/cleaning_bucket_top_right.png"
                alt=""
                width={140}
                height={180}
                className="-right-2 -top-2 w-[80px] sm:w-[120px]"
                delay={0.4}
                loop="float-med"
              />
              <Floater
                src="/assets/project/magnifier_right.png"
                alt=""
                width={80}
                height={86}
                className="-right-2 bottom-[14%] w-[50px] sm:w-[70px]"
                delay={0.7}
                loop="float-slow"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
