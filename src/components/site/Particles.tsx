export function Particles({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 4 + Math.random() * 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 15;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-${size}px`,
              width: `${size}px`,
              height: `${size}px`,
              background: "radial-gradient(circle, oklch(0.85 0.15 270 / 0.9), oklch(0.58 0.25 265 / 0))",
              animation: `particle ${duration}s linear ${delay}s infinite`,
              filter: "blur(1px)",
            }}
          />
        );
      })}
    </div>
  );
}
