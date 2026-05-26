import Link from "next/link";
import Background from "@/components/Background";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen">
      <Background />
      <Header />
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
        <div className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-400">
          404
        </div>
        <h1 className="text-5xl font-medium tracking-tight text-gradient sm:text-6xl">
          Nothing here.
        </h1>
        <p className="mt-5 max-w-md text-ink-400">
          That page does not exist yet. Maybe it is the eighth project - drop a
          brief in.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-medium text-ink-950"
        >
          Back home
        </Link>
      </section>
    </main>
  );
}
