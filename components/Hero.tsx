import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="fade-in-on-load">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Astana, Kazakhstan · open for collaborations
        </div>

        <h1 className="text-5xl font-medium leading-[1.02] tracking-tight text-gradient sm:text-6xl md:text-7xl lg:text-[88px]">
          Selected products,
          <br />
          built for the{" "}
          <span className="font-display italic font-normal text-gradient-accent">
            real world.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg text-ink-300 sm:text-xl">
          I&apos;m Ansar — I build AI-native products and marketplaces from
          Astana. From a live cleaning service to a daily grant-scouting
          agent, every project here is something I designed and shipped.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#projects"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.02]"
          >
            See the work
          </Link>
          <a
            href="https://shinex.kz"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:bg-white/10"
          >
            Visit ShineX (live) ↗
          </a>
        </div>
      </div>
    </section>
  );
}
