import {
  Home, Building2, Calendar, RefreshCw, Sparkles, Shield, AlertTriangle, ArrowRight
} from "lucide-react";

import svcHouse from "@/assets/service-house.jpg";
import svcOffice from "@/assets/service-office.jpg";
import svcWeekly from "@/assets/service-weekly.jpg";
import svcMonthly from "@/assets/service-monthly.jpg";
import svcAnnual from "@/assets/service-annual.jpg";
import svcJanitorial from "@/assets/service-janitorial.jpg";
import svcEmergency from "@/assets/service-emergency.jpg";

const services = [
  { icon: Home, title: "House Cleaning", desc: "Deep cleaning, standard cleaning, move-in & move-out services for spotless homes.", img: svcHouse },
  { icon: Building2, title: "Office Cleaning", desc: "Professional office sanitizing and janitorial solutions for productive workspaces.", img: svcOffice },
  { icon: Calendar, title: "Weekly Cleaning", desc: "Consistent weekly maintenance that keeps your property fresh all week.", img: svcWeekly },
  { icon: RefreshCw, title: "Monthly Cleaning", desc: "Perfect monthly deep refresh for busy homeowners and families.", img: svcMonthly },
  { icon: Sparkles, title: "Annual Cleaning", desc: "Complete annual deep cleaning to restore freshness throughout your property.", img: svcAnnual },
  { icon: Shield, title: "Janitorial Services", desc: "Reliable commercial upkeep for offices, retail spaces, and facilities.", img: svcJanitorial },
];

export function Services() {
  return (
    <section id="services" className="relative bg-gradient-soft overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.58 0.25 265 / 0.15), transparent 50%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-5">
            ✨ Our Services
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[41px] leading-tight">
            All Kinds of Cleaning. <span className="text-gradient">One Call.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Professional residential and commercial cleaning services designed to keep every space spotless, fresh, and renewed.
          </p>
        </div>

        {/* Featured Emergency card */}
        <div className="mt-16" data-reveal>
          <a href="#contact" className="group relative block rounded-3xl overflow-hidden shadow-luxury animate-glow-pulse">
            <div className="aspect-[16/11] sm:aspect-[21/9] sm:aspect-[21/8] min-h-[300px] sm:min-h-0">
              <img src={svcEmergency} alt="24/7 emergency cleaning" width={1920} height={864} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg, oklch(0.18 0.15 270 / 0.85) 0%, oklch(0.25 0.25 265 / 0.55) 100%)",
            }} />
            <div className="absolute inset-0 flex items-end p-6 sm:p-10">
              <div className="text-white max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-electric-blue/90 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-4 animate-glow-pulse">
                  <AlertTriangle className="w-3.5 h-3.5" /> Featured • 24/7 Emergency
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-5xl">🚨 Emergency Cleaning</h3>
                <p className="mt-3 text-white/85 text-sm sm:text-base md:text-lg max-w-xl">
                  24/7 emergency cleaning for water damage, unexpected messes, restoration, and urgent cleanup situations.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-white">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Service grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              data-reveal
              className={`group relative rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 ${
                i % 3 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, transparent 30%, oklch(0.2 0.15 295 / 0.85) 100%)",
              }} />
              {/* glowing border on hover */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/0 group-hover:ring-2 group-hover:ring-electric-blue/60 transition-all duration-500 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="glass-dark rounded-2xl p-5 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl">{s.title}</h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{s.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-electric-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
