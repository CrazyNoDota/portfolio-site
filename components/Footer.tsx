import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const socials = [
  {
    href: "https://t.me/myrentmobile",
    icon: "/assets/project/footer_telegram_icon.webp",
    alt: "Telegram",
  },
  {
    href: "https://www.linkedin.com/",
    icon: "/assets/project/footer_linkedin_icon.webp",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/CrazyNoDota",
    icon: "/assets/project/footer_github_icon.webp",
    alt: "GitHub",
  },
  {
    href: "mailto:myrentmobile@gmail.com",
    icon: "/assets/project/footer_email_icon.webp",
    alt: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10 bg-ink-950/72">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent-cyan">
              Work together
            </div>
            <h3 className="mt-4 font-display text-4xl leading-none text-ink-50 sm:text-5xl">
              Build something{" "}
              <span className="italic text-gradient-accent">useful.</span>
            </h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-ink-400 sm:text-base">
              Have a real workflow that needs a quiet, AI-native rebuild? Send a
              one-paragraph brief and the context that matters.
            </p>
            <a
              href="mailto:myrentmobile@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_14px_34px_-18px_rgba(255,255,255,0.9)] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Send brief
              <span className="transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
              Projects
            </div>
            <ul className="space-y-2 text-sm text-ink-200">
              {[
                ["ShineX", "/projects/shinex"],
                ["AI Ops Platform", "/projects/ai-ops-platform"],
                ["AI Grant Agent", "/projects/ai-grant-agent"],
                ["AdvertMarket KZ", "/projects/advertmarket-kz"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link className="transition-colors hover:text-white" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
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
                  shinex.kz -&gt;
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href="https://github.com/CrazyNoDota"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub -&gt;
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-xs text-ink-500">
            <Image
              src="/assets/home/header_logo.webp"
              alt="QDeon"
              width={24}
              height={20}
              className="h-5 w-auto opacity-70"
            />
            (c) {new Date().getFullYear()} QDeon - Astana, KZ
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.alt}
                className="group grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
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
