import Image from "next/image";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const badges = [
  { src: "/assets/home/stack_badge_nextjs.webp", alt: "Next.js" },
  { src: "/assets/home/stack_badge_react.webp", alt: "React" },
  { src: "/assets/home/stack_badge_typescript.webp", alt: "TypeScript" },
  { src: "/assets/home/stack_badge_tailwind.webp", alt: "Tailwind CSS" },
  { src: "/assets/home/stack_badge_ssg.webp", alt: "SSG" },
  { src: "/assets/home/stack_badge_vercel.webp", alt: "Vercel" },
  { src: "/assets/home/stack_badge_github.webp", alt: "GitHub" },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24"
    >
      <Reveal className="mb-8 flex items-center gap-4">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
          ◇ Stack
        </div>
        <span className="h-px flex-1 bg-white/5" />
      </Reveal>

      <RevealStagger
        className="flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4"
        stagger={0.05}
      >
        {badges.map((b) => (
          <RevealItem key={b.alt}>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] px-1 py-1 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
              <Image
                src={b.src}
                alt={b.alt}
                width={140}
                height={40}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10"
              />
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
