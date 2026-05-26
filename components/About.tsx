import Image from "next/image";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const features = [
  {
    icon: "/assets/home/icon_local_first_globe.webp",
    title: "Local-first",
    body: "RU/KK UX, Kazakhstan-aware integrations like Kaspi Pay, 2GIS and 1C — built for the real market, not a Western fork.",
  },
  {
    icon: "/assets/home/icon_payments_card.webp",
    title: "Payments & integrations",
    body: "Kaspi Pay, Stripe, and OpenAI/Anthropic stitched in idiomatically — payments and AI working out of the box.",
  },
  {
    icon: "/assets/home/icon_ai_that_ships_sparkle.webp",
    title: "AI that ships",
    body: "Agents, scrapers, scoring models, Telegram bots — not demos. Each one runs daily for real users.",
  },
  {
    icon: "/assets/home/icon_end_to_end_rocket.webp",
    title: "End-to-end",
    body: "Discovery, design, code, infra, and the boring ops afterwards. One person, the whole product.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
          ◯ About
        </div>
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
          A solo product studio — based in Astana,
          <br className="hidden sm:block" />{" "}
          <span className="font-display italic font-normal text-ink-300">
            built for Kazakhstan and the CIS.
          </span>
        </h2>
      </Reveal>

      <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <RevealItem key={f.title}>
            <div className="card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src={f.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div className="text-base font-semibold text-ink-50">
                {f.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {f.body}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-12 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7 space-y-4 text-ink-300 leading-relaxed">
          <p>
            QDeon is a small product studio based in Astana. We identify a
            painful, real-world workflow inside a Kazakhstan-sized SMB and
            rebuild it as a calm, AI-native product — end to end.
          </p>
          <p>
            That means a lot of Next.js, a lot of TypeScript, and a lot of
            Russian-first UX. It also means building the unglamorous things
            other studios skip: ops dashboards, Telegram bots, scrapers,
            booking flows.
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col gap-3 self-end">
          <a
            href="mailto:myrentmobile@gmail.com"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-ink-50 backdrop-blur-md transition-all hover:scale-[1.03] hover:border-white/30 hover:bg-white/10"
          >
            More about us
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
