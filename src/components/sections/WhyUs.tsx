import { Star, MapPin, AlertTriangle, Calendar, Building2, Sparkles } from "lucide-react";
import whyImg from "@/assets/hero-cleaning.jpg";

const features = [
  { icon: Star, title: "10+ Years Experience", desc: "A decade of trusted local cleaning excellence." },
  { icon: MapPin, title: "63-Mile Radius", desc: "Serving Albuquerque and 15+ surrounding NM cities." },
  { icon: AlertTriangle, title: "24/7 Emergency Service", desc: "Day, night, weekend — we respond fast to emergencies." },
  { icon: Calendar, title: "Flexible Scheduling", desc: "Hourly, weekly, monthly, or annual custom cleaning plans." },
  { icon: Building2, title: "Residential & Commercial", desc: "Meticulous care for homes, busy offices, and facilities." },
  { icon: Sparkles, title: "The Blue-Purple Standard", desc: "Premium detail and reliable results on every surface." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute inset-0 bg-gradient-soft opacity-60" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-brand opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Modern Luxury Image Showcase */}
          <div className="lg:col-span-5 relative" data-reveal>
            {/* Background glowing frame */}
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-white/20">
              <img
                src={whyImg}
                alt="Spotless clean interior"
                className="w-full h-[320px] sm:h-[450px] lg:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-luxury animate-float border border-white/20">
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="text-sm font-bold text-foreground">Licensed & Insured</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Albuquerque, NM</div>
            </div>
          </div>

          {/* Right Side: Header and Value Props Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-5 w-fit">
              💜💙 Why Choose Us
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[45px] leading-tight mb-8">
              Premium care, <span className="text-gradient">every detail</span>
            </h2>

            {/* Feature compact glass-card grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div key={f.title} className="group flex items-start gap-4 p-4 rounded-2xl glass hover:shadow-card hover:bg-white/60 transition-all duration-300 border border-white/10">
                  {/* Glowing Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
