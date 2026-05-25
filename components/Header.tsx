import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-ink-950/60 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-accent-violet to-accent-cyan text-[10px] font-bold text-ink-950">
            A
          </span>
          <span className="text-ink-50">ansar</span>
          <span className="text-ink-400">/portfolio</span>
        </Link>

        <nav className="hidden gap-7 text-sm text-ink-300 md:flex">
          <Link href="/#projects" className="hover:text-ink-50 transition-colors">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-ink-50 transition-colors">
            About
          </Link>
          <a
            href="https://shinex.kz"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-50 transition-colors"
          >
            ShineX ↗
          </a>
        </nav>

        <a
          href="mailto:myrentmobile@gmail.com"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-ink-100 transition-colors hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
