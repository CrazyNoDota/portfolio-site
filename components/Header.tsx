"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <Image
            src="/assets/home/header_logo.png"
            alt="Ansar"
            width={36}
            height={32}
            priority
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
          <span className="hidden text-ink-50 sm:inline">Ansar</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-300 md:flex">
          <Link
            href="/#projects"
            className="relative transition-colors hover:text-ink-50 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-accent-violet after:to-accent-cyan after:transition-all hover:after:w-full"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="relative transition-colors hover:text-ink-50 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-accent-violet after:to-accent-cyan after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/#stack"
            className="relative transition-colors hover:text-ink-50 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-accent-violet after:to-accent-cyan after:transition-all hover:after:w-full"
          >
            Stack
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:myrentmobile@gmail.com"
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-ink-50 backdrop-blur-md transition-all hover:scale-[1.03] hover:border-white/30 hover:bg-white/10 sm:px-5 sm:py-2 sm:text-sm"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-ink-100 transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 4h10M2 10h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 text-sm text-ink-200">
          <Link
            href="/#projects"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 hover:bg-white/5"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 hover:bg-white/5"
          >
            About
          </Link>
          <Link
            href="/#stack"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 hover:bg-white/5"
          >
            Stack
          </Link>
        </nav>
      </div>
    </header>
  );
}
