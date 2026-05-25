import { useEffect, useRef, useState } from "react";
import { Star, Sparkles, ArrowRight } from "lucide-react";
import danielImg from "@/assets/daniel.jpg";

function Counter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = Date.now();
        const dur = 1800;
        const tick = () => {
          const p = Math.min(1, (Date.now() - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
        io.disconnect();
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">{n}{suffix}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function Welcome() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-brand opacity-10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="relative" data-reveal>
          <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-luxury">
            <img src={danielImg} alt="Daniel Alado — owner of A-1 Cleaning Services" width={1024} height={1280} loading="lazy" className="w-full h-[320px] sm:h-[450px] lg:h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* floating badge */}
          <div className="hidden sm:block absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-luxury animate-float">
            <div className="text-3xl font-display font-bold text-gradient">35+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</div>
          </div>
          <div className="hidden sm:block absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-luxury animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="text-xs font-semibold mt-1">Loved locally</div>
          </div>
        </div>

        <div data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="w-3.5 h-3.5" /> Meet your local cleaner
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            Hi, I'm <span className="text-gradient">Alana</span> — Your Trusted Local Cleaner
          </h2>
          {/* glowing accent line */}
          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-brand glow-blue" />

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            For over 35 years, I've built A-1 Cleaning Services LLC on one simple promise: <span className="text-foreground font-medium">we clean like we own it</span>.
            From luxury homes to busy offices, every surface gets the same blue-purple standard of care — meticulous, dependable, and delivered with pride.
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            We're a local Albuquerque team available 24/7 for emergencies, with flexible scheduling across 15+ cities in New Mexico.
          </p>

          {/* Collapsible Read More content */}
          {isExpanded && (
            <div className="mt-4 space-y-4 animate-fade-up">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We use only top-tier, eco-friendly sanitizing products that are safe for pets and families, combined with advanced commercial-grade equipment to ensure a flawless finish on every surface.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you need a standard weekly touch-up or a meticulous deep clean to prepare a home for listing, we design our schedule around your life. At A-1 Cleaning Services LLC, your satisfaction isn't just a goal—it's our standard.
              </p>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group mt-6 inline-flex items-center gap-2 rounded-2xl border border-border bg-white/40 backdrop-blur-md px-6 py-3 text-sm font-bold text-foreground shadow-card hover:bg-[#7C3AED] hover:text-white hover:border-transparent hover:scale-105 hover:shadow-luxury transition-all duration-300"
          >
            {isExpanded ? "Read Less" : "Read More"}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 duration-300 ${isExpanded ? "-rotate-90 group-hover:translate-x-0 group-hover:-translate-y-0.5" : ""}`} />
          </button>

          <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-6 glass rounded-2xl p-4 sm:p-6">
            <Counter to={35} suffix="+" label="Years" />
            <Counter to={63} label="Mile radius" />
            <Counter to={500} suffix="+" label="Happy clients" />
          </div>
        </div>
      </div>
    </section>
  );
}
