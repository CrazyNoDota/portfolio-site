export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layered atmospheric gradient — static (no per-frame animation) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.20) 0%, rgba(99,102,241,0) 60%), radial-gradient(ellipse 60% 40% at 15% 35%, rgba(34,211,238,0.10) 0%, rgba(34,211,238,0) 60%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(168,85,247,0.14) 0%, rgba(168,85,247,0) 60%)",
        }}
      />

      {/* Subtle accent orb (low-cost: opacity transition, no blur) */}
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-[0.55]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.30) 0%, rgba(124,58,237,0) 70%)",
        }}
      />

      {/* Faint grid only at top */}
      <div className="absolute inset-0 grid-bg" />

      {/* Subtle noise */}
      <div className="absolute inset-0 noise opacity-[0.25] mix-blend-overlay" />
    </div>
  );
}
