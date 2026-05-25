export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-400">
            ◯ About
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl">
            I build the boring things <br />
            <span className="font-display italic font-normal text-ink-300">
              well, and the wild things fast.
            </span>
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-ink-300 leading-relaxed">
          <p>
            I&apos;m based in Astana and most of what I do is identify a
            painful, real-world workflow — usually inside a Kazakhstan-sized
            SMB — and rebuild it as a calm, AI-native product.
          </p>
          <p>
            That means a lot of Next.js, a lot of TypeScript, and a lot of
            Russian-first UX. It also means building the unglamorous things
            other people skip: ops dashboards, Telegram bots, scrapers,
            booking flows.
          </p>
          <p>
            Open to commissions, partnerships, and the kind of grants where
            the deck has to land on a real problem.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
            <Stat n="7" label="Products shipped or in flight" />
            <Stat n="3" label="Languages supported (RU/KK/EN)" />
            <Stat n="1" label="Live in Astana" />
            <Stat n="∞" label="Cups of коже" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="font-display text-3xl text-ink-50">{n}</div>
      <div className="mt-1 text-xs text-ink-400 leading-snug">{label}</div>
    </div>
  );
}
