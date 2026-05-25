export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-3xl text-ink-50 sm:text-5xl">
              Let&apos;s build <br />
              <span className="italic text-gradient-accent">something useful.</span>
            </h3>
            <p className="mt-4 max-w-md text-ink-400">
              Have a real-world workflow that needs a quiet, AI-native rebuild?
              Send a one-paragraph brief — I read everything.
            </p>
            <a
              href="mailto:myrentmobile@gmail.com"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.02]"
            >
              myrentmobile@gmail.com →
            </a>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">
                Projects
              </div>
              <ul className="space-y-2 text-ink-200">
                <li><a className="hover:text-white" href="/projects/shinex">ShineX</a></li>
                <li><a className="hover:text-white" href="/projects/ai-ops-platform">AI Ops Platform</a></li>
                <li><a className="hover:text-white" href="/projects/ai-grant-agent">AI Grant Agent</a></li>
                <li><a className="hover:text-white" href="/projects/advertmarket-kz">AdvertMarket KZ</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">
                More
              </div>
              <ul className="space-y-2 text-ink-200">
                <li><a className="hover:text-white" href="/projects/contentfarm">ContentFarm</a></li>
                <li><a className="hover:text-white" href="/projects/robostar">RoboStar</a></li>
                <li><a className="hover:text-white" href="/projects/solvea-atelier">Solvea Atelier</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">
                Elsewhere
              </div>
              <ul className="space-y-2 text-ink-200">
                <li><a className="hover:text-white" href="https://shinex.kz" target="_blank" rel="noreferrer">shinex.kz ↗</a></li>
                <li><a className="hover:text-white" href="mailto:myrentmobile@gmail.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-ink-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Ansar. Built in Astana.</div>
          <div className="font-mono text-ink-500">v1 · next.js · vercel</div>
        </div>
      </div>
    </footer>
  );
}
