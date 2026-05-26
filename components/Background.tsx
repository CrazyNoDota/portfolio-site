export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,17,23,0.86) 0%, rgba(7,9,13,0.96) 46%, #07090d 100%), radial-gradient(ellipse 120% 70% at 50% -10%, rgba(45,212,191,0.12), rgba(45,212,191,0) 54%), radial-gradient(ellipse 110% 80% at 100% 20%, rgba(244,178,77,0.08), rgba(244,178,77,0) 56%)",
        }}
      />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise opacity-[0.22] mix-blend-overlay" />
    </div>
  );
}
