"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#stack", label: "Stack" },
];

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
          ? "border-b border-white/10 bg-ink-950/82 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-white/0 bg-ink-950/20 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight"
          aria-label="QDeon home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
            <Image
              src="/assets/home/header_logo.webp"
              alt=""
              width={36}
              height={32}
              priority
              className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-ink-50">QDeon</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
              Product Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 text-sm text-ink-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-white/[0.06] hover:text-ink-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:myrentmobile@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-ink-50 backdrop-blur-md transition-all hover:border-accent-cyan/50 hover:bg-white/[0.08] sm:px-5 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-ink-100 transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d={open ? "M4 4l8 8M12 4l-8 8" : "M3 5h10M3 11h10"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 text-sm text-ink-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 hover:bg-white/[0.06]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
