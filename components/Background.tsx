export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient orbs */}
      <div
        className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-60 blur-3xl animate-pulse-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -left-32 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl animate-pulse-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0) 70%)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-2/3 right-[-120px] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-pulse-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(244,114,182,0.35) 0%, rgba(244,114,182,0) 70%)",
          animationDelay: "3s",
        }}
      />

      {/* Grid overlay (only top) */}
      <div className="absolute inset-0 grid-bg" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-[0.35] mix-blend-overlay" />
    </div>
  );
}
