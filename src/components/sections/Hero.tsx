import { useEffect, useState } from "react";
import { ArrowRight, Phone, Star, Shield, Clock, Heart, ChevronDown } from "lucide-react";
import { Particles } from "@/components/site/Particles";

import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import b3 from "@/assets/b3.jpg";

const slides = [b1, b2, b3];

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Banner Image Slider */}
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Luxury cleaning service Albuquerque banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ${
            index === slide ? "opacity-50" : "opacity-0"
          }`}
          width={1920}
          height={1080}
        />
      ))}

      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, oklch(0.18 0.15 300 / 0.92) 0%, oklch(0.25 0.2 285 / 0.78) 50%, oklch(0.35 0.22 270 / 0.72) 60%)",
      }} />
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: "radial-gradient(circle at 15% 30%, oklch(0.58 0.25 265 / 0.5), transparent 40%), radial-gradient(circle at 85% 70%, oklch(0.45 0.25 305 / 0.5), transparent 40%)",
      }} />
      <Particles count={22} />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-xs font-medium text-white/90 mb-6 animate-fade-up" style={{ marginTop: "100px" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
            Available Now • Albuquerque, NM
          </div>

          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <span className="block bg-clip-text text-transparent animate-fade-up" style={{
              backgroundImage: "linear-gradient(90deg, #E8E0FF 0%, #2E5AFF 50%, #E8E0FF 60%)",
              animationDelay: "0.1s",
              fontSize: "45px",
            }}>
              10 Years of Excellence — 63 Miles of Clean.
            </span>
            <span className="block text-white/90 animate-fade-up" style={{ animationDelay: "0.2s", fontSize: "39px", marginTop: "21px" }}>
              Emergency? We're There 24/7.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            House, office, hourly, weekly, monthly, or annual — we do it all. Serving Albuquerque, NM and 63 miles around.
            Open Monday–Friday 8am–5pm with <span className="text-white font-semibold">24/7 emergency cleaning</span> for residential and commercial clients.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand text-white px-7 py-4 font-semibold shadow-luxury hover:scale-105 transition-all glow-blue">
              🧼 Request Your Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:5054569603" className="inline-flex items-center gap-2 rounded-2xl glass text-white px-7 py-4 font-semibold hover:bg-white/20 transition-all border border-white/30">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: Star, label: "5.0 Rated", sub: "Local clients" },
              { icon: Shield, label: "Licensed", sub: "& Insured" },
              { icon: Clock, label: "24/7", sub: "Emergency" },
              { icon: Heart, label: "10+ Years", sub: "Experience" },
            ].map((b) => (
              <div key={b.label} className="glass-dark rounded-2xl p-4 flex items-center gap-3 animate-float" style={{ animationDelay: `${Math.random()}s` }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="text-white text-sm font-bold">{b.label}</div>
                  <div className="text-white/60 text-[11px]">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </div>
      </div>

      {/* wave divider */}
      <div className="absolute bottom-0 inset-x-0 leading-[0]">
        <svg viewBox="0 0 1440 120" className="w-full h-[80px] sm:h-[120px]" preserveAspectRatio="none">
          <path d="M0,64 C320,128 720,0 1080,48 C1280,80 1360,80 1440,120 L1440,120 L0,120 Z" fill="oklch(0.99 0.005 270)" />
        </svg>
      </div>
    </section>
  );
}
