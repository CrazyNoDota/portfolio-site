import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const socials = [
  {
    href: "https://t.me/myrentmobile",
    icon: "/assets/project/footer_telegram_icon.png",
    alt: "Telegram",
  },
  {
    href: "https://www.linkedin.com/",
    icon: "/assets/project/footer_linkedin_icon.png",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/CrazyNoDota",
    icon: "/assets/project/footer_github_icon.png",
    alt: "GitHub",
  },
  {
    href: "mailto:myrentmobile@gmail.com",
    icon: "/assets/project/footer_email_icon.png",
    alt: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5 bg-ink-950/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h3 className="font-display text-3xl text-ink-50 sm:text-5xl">
              Let&apos;s build <br />
              <span className="italic text-gradient-accent">
                something useful.
              </span>
            </h3>
            <p className="mt-4 max-w-md text-ink-400">
              Have a real-world workflow that needs a quiet, AI-native
              rebuild? Send a one-paragraph brief — I read everything.
            </p>
            <a
              href="mailto:myrentmobile@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_6px_30px_-6px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.04]"
            >
              Work together
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
              Projects
            </div>
            <ul className="space-y-2 text-sm text-ink-200">
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/projects/shinex"
                >
                  ShineX
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/projects/ai-ops-platform"
                >
                  AI Ops Platform
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/projects/ai-grant-agent"
                >
                  AI Grant Agent
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/projects/advertmarket-kz"
                >
                  AdvertMarket KZ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
              Elsewhere
            </div>
            <ul className="space-y-2 text-sm text-ink-200">
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href="https://shinex.kz"
                  target="_blank"
                  rel="noreferrer"
                >
                  shinex.kz ↗
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href="https://github.com/CrazyNoDota"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-xs text-ink-500">
            <Image
              src="/assets/home/header_logo.png"
              alt="Ansar"
              width={24}
              height={20}
              className="h-5 w-auto opacity-70"
            />
            © {new Date().getFullYear()} Ansar · Astana, KZ
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.alt}
                className="group grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition-all hover:scale-110 hover:border-white/30 hover:bg-white/10"
              >
                <Image
                  src={s.icon}
                  alt={s.alt}
                  width={18}
                  height={18}
                  className="h-4 w-4 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
