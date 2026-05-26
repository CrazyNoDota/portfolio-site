"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "7", label: "Products and concepts" },
  { value: "RU / KK / EN", label: "Localized UX" },
  { value: "AI + payments", label: "Practical integrations" },
];

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
      initial={{ opacity: 0, scale: 0.86, y: 12 }}
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
          className="h-auto w-full select-none drop-shadow-[0_18px_36px_rgba(0,0,0,0.42)]"
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-24">
      <div className="absolute inset-x-5 top-8 hidden h-[520px] overflow-hidden sm:block">
        <Floater
          src="/assets/home/kaspi_shopping_bag.webp"
          alt=""
          width={150}
          height={150}
          className="left-[8%] top-20 w-[88px] lg:w-[118px]"
          delay={0.35}
          loop="float-med"
        />
        <Floater
          src="/assets/home/ai_chip.webp"
          alt=""
          width={150}
          height={150}
          className="right-[12%] top-10 w-[84px] lg:w-[116px]"
          delay={0.45}
          loop="float-slow"
        />
        <Floater
          src="/assets/home/robot.webp"
          alt=""
          width={200}
          height={200}
          className="right-2 top-[255px] w-[116px] lg:w-[158px]"
          delay={0.55}
          loop="float-med"
        />
        <Floater
          src="/assets/home/kazakhstan_map_pin.webp"
          alt=""
          width={70}
          height={70}
          className="left-[18%] top-[300px] w-[44px] lg:w-[58px]"
          delay={0.62}
          loop="drift"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-300 backdrop-blur-md sm:text-xs"
        >
          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
          </span>
          Astana - open for selected builds
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="text-4xl font-medium leading-[1.04] tracking-tight text-gradient sm:text-5xl md:text-6xl lg:text-[76px]"
        >
          Useful digital products for{" "}
          <span className="font-display italic font-normal text-gradient-accent">
            Kazakhstan
          </span>{" "}
          and the CIS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-300 sm:text-lg md:text-xl"
        >
          Marketplaces, AI tooling, edtech, and ecommerce with local payments,
          Russian-first UX, and the operational details needed to ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_14px_34px_-18px_rgba(255,255,255,0.9)] transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            View work
            <span className="transition-transform group-hover:translate-x-0.5">
              -&gt;
            </span>
          </Link>
          <a
            href="mailto:myrentmobile@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:bg-white/[0.08]"
          >
            Start a brief
            <span className="transition-transform group-hover:translate-x-0.5">
              -&gt;
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.52 }}
          className="mx-auto mt-12 grid max-w-3xl gap-4 border-y border-white/10 py-5 text-left sm:grid-cols-3 sm:text-center"
        >
          {stats.map((item) => (
            <div key={item.label}>
              <div className="text-sm font-semibold text-ink-50 sm:text-base">
                {item.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-500">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
