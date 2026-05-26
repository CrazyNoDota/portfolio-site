"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

// Floating decorative asset
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
      className={`pointer-events-none absolute gpu ${className}`}
      initial={{ opacity: 0, scale: 0.7, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.9, ease }}
    >
      <div className={`animate-${loop}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          className="h-auto w-full select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-20 lg:pt-24">
      {/* Decorative floaters — only render on >=sm to keep mobile tidy */}
      <div className="absolute inset-0 hidden sm:block">
        <Floater
          src="/assets/home/left_cleaning_brush.webp"
          alt=""
          width={140}
          height={150}
          className="left-2 top-32 w-[90px] lg:w-[120px] xl:w-[140px]"
          delay={0.45}
          loop="float-slow"
        />
        <Floater
          src="/assets/home/blue_orb_left.webp"
          alt=""
          width={70}
          height={70}
          className="left-[110px] top-[260px] w-[40px] lg:w-[56px]"
          delay={0.55}
          loop="drift"
        />
        <Floater
          src="/assets/home/left_yellow_sparkles.webp"
          alt=""
          width={70}
          height={70}
          className="left-[180px] top-24 w-[42px] lg:w-[56px]"
          delay={0.35}
          loop="sparkle-twinkle"
        />
        <Floater
          src="/assets/home/tiny_blue_sparkle_left.webp"
          alt=""
          width={32}
          height={32}
          className="left-[270px] top-44 w-[18px] lg:w-[24px]"
          delay={0.7}
          loop="sparkle-twinkle"
        />

        <Floater
          src="/assets/home/kaspi_shopping_bag.webp"
          alt=""
          width={150}
          height={150}
          className="left-[42%] top-8 w-[80px] lg:w-[110px]"
          delay={0.5}
          loop="float-med"
        />
        <Floater
          src="/assets/home/paper_plane.webp"
          alt=""
          width={170}
          height={170}
          className="right-[30%] top-2 w-[90px] lg:w-[130px]"
          delay={0.4}
          loop="drift"
        />
        <Floater
          src="/assets/home/ai_chip.webp"
          alt=""
          width={150}
          height={150}
          className="right-[12%] top-16 w-[80px] lg:w-[110px]"
          delay={0.55}
          loop="float-slow"
        />
        <Floater
          src="/assets/home/robot.webp"
          alt=""
          width={200}
          height={200}
          className="right-2 top-[230px] w-[110px] lg:w-[160px]"
          delay={0.6}
          loop="float-med"
        />
        <Floater
          src="/assets/home/magnifier.webp"
          alt=""
          width={100}
          height={100}
          className="right-[18%] top-[330px] w-[58px] lg:w-[80px]"
          delay={0.7}
          loop="drift"
        />
        <Floater
          src="/assets/home/kazakhstan_map_pin.webp"
          alt=""
          width={70}
          height={70}
          className="right-[42%] top-[300px] w-[40px] lg:w-[56px]"
          delay={0.65}
          loop="float-slow"
        />
        <Floater
          src="/assets/home/tiny_blue_sparkle_right.webp"
          alt=""
          width={28}
          height={28}
          className="right-[8%] top-[330px] w-[18px] lg:w-[22px]"
          delay={0.85}
          loop="sparkle-twinkle"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-300 backdrop-blur-md sm:text-xs"
        >
          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
          </span>
          Astana · Open for work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="text-4xl font-medium leading-[1.04] tracking-tight text-gradient sm:text-5xl md:text-6xl lg:text-[72px]"
        >
          Building products for{" "}
          <span className="font-display italic font-normal text-gradient-accent">
            Kazakhstan
          </span>{" "}
          and the CIS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-ink-300 sm:text-lg md:text-xl"
        >
          Marketplaces, AI tooling, edtech and ecommerce — localized in
          RU/KK with Kaspi Pay and local integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_6px_30px_-6px_rgba(255,255,255,0.5)] transition-all hover:scale-[1.04] hover:shadow-[0_10px_40px_-6px_rgba(255,255,255,0.6)]"
          >
            View our work
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <a
            href="mailto:myrentmobile@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:scale-[1.04] hover:border-white/30 hover:bg-white/10"
          >
            Let&apos;s talk
            <span className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
