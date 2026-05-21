import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, ArrowRight, Star, Clock, MapPin, Shield, Sparkles, Heart,
  Calendar, RefreshCw, Building2, Home, AlertTriangle, ChevronDown,
  Quote, Mail, MessageSquare, CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Particles } from "@/components/site/Particles";

import heroImg from "@/assets/hero-cleaning.jpg";
import danielImg from "@/assets/daniel.jpg";
import svcHouse from "@/assets/service-house.jpg";
import svcOffice from "@/assets/service-office.jpg";
import svcHourly from "@/assets/service-hourly.jpg";
import svcWeekly from "@/assets/service-weekly.jpg";
import svcMonthly from "@/assets/service-monthly.jpg";
import svcAnnual from "@/assets/service-annual.jpg";
import svcJanitorial from "@/assets/service-janitorial.jpg";
import svcEmergency from "@/assets/service-emergency.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A-1 Cleaning Services LLC | Luxury Cleaning in Albuquerque, NM" },
      { name: "description", content: "Premium residential & commercial cleaning across Albuquerque and 63 miles around. 10 years of excellence, 24/7 emergency cleaning. Call (505) 456-9603." },
      { property: "og:title", content: "A-1 Cleaning Services LLC | Luxury Cleaning in Albuquerque" },
      { property: "og:description", content: "10 Years of Excellence – 63 Miles of Clean. Emergency? We're There 24/7." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "A-1 Cleaning Services LLC",
        telephone: "(505) 456-9603",
        email: "a1cleaningservicenm@gmail.com",
        address: { "@type": "PostalAddress", addressLocality: "Albuquerque", addressRegion: "NM" },
        areaServed: "Albuquerque, NM and 63 miles around",
        openingHours: "Mo-Fr 08:00-17:00",
        slogan: "We Clean Like We Own It",
      }),
    }],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="relative bg-background">
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <Gallery />
      <WhyUs />
      <Reviews />
      <FAQ />
      <ServiceAreas />
      <QuoteForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury cleaning service in Albuquerque"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, oklch(0.18 0.15 300 / 0.92) 0%, oklch(0.25 0.2 285 / 0.78) 50%, oklch(0.35 0.22 270 / 0.72) 100%)",
      }} />
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: "radial-gradient(circle at 15% 30%, oklch(0.58 0.25 265 / 0.5), transparent 40%), radial-gradient(circle at 85% 70%, oklch(0.45 0.25 305 / 0.5), transparent 40%)",
      }} />
      <Particles count={22} />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-xs font-medium text-white/90 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
            Available Now • Albuquerque, NM
          </div>

          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <span className="block animate-fade-up">10 Years of Excellence —</span>
            <span className="block bg-clip-text text-transparent animate-fade-up" style={{
              backgroundImage: "linear-gradient(90deg, #E8E0FF 0%, #2E5AFF 50%, #E8E0FF 100%)",
              animationDelay: "0.1s",
            }}>
              63 Miles of Clean.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
          <path d="M0,64 C320,128 720,0 1080,48 C1280,80 1360,80 1440,64 L1440,120 L0,120 Z" fill="oklch(0.99 0.005 270)" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- WELCOME ---------- */
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

function Welcome() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-brand opacity-10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative" data-reveal>
          <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-luxury">
            <img src={danielImg} alt="Daniel Alado — owner of A-1 Cleaning Services" width={1024} height={1280} loading="lazy" className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-luxury animate-float">
            <div className="text-3xl font-display font-bold text-gradient">10+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</div>
          </div>
          <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-luxury animate-float" style={{ animationDelay: "1s" }}>
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
          <h2 className="mt-5 font-display font-bold text-4xl sm:text-5xl leading-tight">
            Hi, I'm <span className="text-gradient">Daniel Alado</span> — Your Trusted Local Cleaner
          </h2>
          {/* glowing accent line */}
          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-brand glow-blue" />

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For over a decade, I've built A-1 Cleaning Services on one simple promise: <span className="text-foreground font-medium">we clean like we own it</span>.
            From luxury homes to busy offices, every surface gets the same blue-purple standard of care — meticulous, dependable, and delivered with pride.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're a local Albuquerque team available 24/7 for emergencies, with flexible scheduling across 15+ cities in New Mexico.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 glass rounded-2xl p-6">
            <Counter to={10} suffix="+" label="Years" />
            <Counter to={63} label="Mile radius" />
            <Counter to={500} suffix="+" label="Happy clients" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Home, title: "House Cleaning", desc: "Deep cleaning, standard cleaning, move-in & move-out services for spotless homes.", img: svcHouse },
  { icon: Building2, title: "Office Cleaning", desc: "Professional office sanitizing and janitorial solutions for productive workspaces.", img: svcOffice },
  { icon: Clock, title: "Hourly Cleaning", desc: "Flexible hourly cleaning services — pay only for the time you need.", img: svcHourly },
  { icon: Calendar, title: "Weekly Cleaning", desc: "Consistent weekly maintenance that keeps your property fresh all week.", img: svcWeekly },
  { icon: RefreshCw, title: "Monthly Cleaning", desc: "Perfect monthly deep refresh for busy homeowners and families.", img: svcMonthly },
  { icon: Sparkles, title: "Annual Cleaning", desc: "Complete annual deep cleaning to restore freshness throughout your property.", img: svcAnnual },
  { icon: Shield, title: "Janitorial Services", desc: "Reliable commercial upkeep for offices, retail spaces, and facilities.", img: svcJanitorial },
];

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.58 0.25 265 / 0.15), transparent 50%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-5">
            ✨ Our Services
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            All Kinds of Cleaning. <span className="text-gradient">One Call.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Professional residential and commercial cleaning services designed to keep every space spotless, fresh, and renewed.
          </p>
        </div>

        {/* Featured Emergency card */}
        <div className="mt-16" data-reveal>
          <a href="#contact" className="group relative block rounded-3xl overflow-hidden shadow-luxury animate-glow-pulse">
            <div className="aspect-[21/9] sm:aspect-[21/8]">
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
                <p className="mt-3 text-white/85 text-base sm:text-lg max-w-xl">
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

/* ---------- GALLERY ---------- */
const galleryItems = [
  { title: "House Deep Clean", img: svcHouse, span: "row-span-2" },
  { title: "Office Makeover", img: svcOffice, span: "" },
  { title: "Emergency Cleanup", img: svcEmergency, span: "col-span-2" },
  { title: "Carpet & Floor Detail", img: svcJanitorial, span: "" },
  { title: "Window & Baseboard", img: svcMonthly, span: "" },
  { title: "Weekly Maintenance", img: svcWeekly, span: "row-span-2" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary mb-5">
            📸 Real Work, Real Results
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            See the <span className="text-gradient">Blue-Purple Difference</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Before & After — Real Work by Daniel Alado</p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]" data-reveal>
          {galleryItems.map((g) => (
            <div key={g.title} className={`group relative rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all ${g.span}`}>
              <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-semibold">{g.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-reveal>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand text-white px-7 py-4 font-semibold shadow-luxury hover:scale-105 transition-transform">
            📸 View Full Gallery <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const features = [
  { icon: Star, title: "10+ Years Experience", desc: "A decade of trusted local cleaning excellence." },
  { icon: MapPin, title: "63-Mile Radius", desc: "Serving Albuquerque and 15+ surrounding cities." },
  { icon: AlertTriangle, title: "24/7 Emergency Service", desc: "Day, night, weekend — we respond fast." },
  { icon: Calendar, title: "Flexible Scheduling", desc: "Hourly, weekly, monthly, or annual plans." },
  { icon: Building2, title: "Residential & Commercial", desc: "Homes, offices, retail, and facilities." },
  { icon: Sparkles, title: "The Blue-Purple Standard", desc: "Meticulous detail. Premium results. Every time." },
];

function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-brand opacity-10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-5">
            💜💙 Why Choose Us
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            Premium care, <span className="text-gradient">every detail</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} data-reveal className="group relative glass rounded-3xl p-7 hover:shadow-luxury transition-all hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-card animate-float" style={{ animationDelay: `${i * 0.15}s` }}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl">{f.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
const reviews = [
  { name: "Maria G.", role: "Homeowner, Albuquerque", text: "Daniel and his team transformed our home. Every corner sparkled — they truly clean like they own it.", avatar: "M" },
  { name: "Southwest Realty Group", role: "Commercial Client", text: "We trust A-1 for all our property turnovers. Reliable, professional, and the move-out deep cleans are unmatched.", avatar: "S" },
  { name: "James T.", role: "Office Manager, Rio Rancho", text: "Called at 11pm for a flood emergency. They were on-site by midnight. Saved our office. Lifesavers.", avatar: "J" },
];

function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.58 0.25 265 / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.45 0.25 305 / 0.3), transparent 50%)",
      }} />
      <Particles count={14} />

      <div className="relative mx-auto max-w-5xl px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium border border-white/20 mb-5" data-reveal>
          ⭐ Reviews
        </div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl" data-reveal>
          Loved by locals across <span style={{ background: "linear-gradient(90deg,#E8E0FF,#2E5AFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>New Mexico</span>
        </h2>

        <div className="mt-14 relative h-[320px] sm:h-[280px]">
          {reviews.map((r, idx) => (
            <div
              key={r.name}
              className={`absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
            >
              <div className="glass-dark rounded-3xl p-8 sm:p-10 border border-white/15 max-w-3xl mx-auto">
                <Quote className="w-10 h-10 text-electric-blue mx-auto mb-5 opacity-80" />
                <p className="text-lg sm:text-xl leading-relaxed text-white/90 italic">"{r.text}"</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold">{r.avatar}</div>
                  <div className="text-left">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-white/60">{r.role}</div>
                  </div>
                </div>
                <div className="mt-5 flex justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Review ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-electric-blue" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "What areas do you serve?", a: "We serve Albuquerque, NM and a 63-mile radius — including Rio Rancho, Santa Fe, Bernalillo, Los Lunas, and 11+ more cities." },
  { q: "Do you really offer 24/7 emergency cleaning?", a: "Yes. We're on-call around the clock for water damage, urgent cleanup, and restoration emergencies — call (505) 456-9603 anytime." },
  { q: "Are you licensed and insured?", a: "Absolutely. A-1 Cleaning Services LLC is fully licensed and insured for residential and commercial work." },
  { q: "What's included in a deep cleaning?", a: "Floors, baseboards, kitchens, bathrooms, windows, dusting, sanitizing high-touch areas — anything you'd want spotless if you owned the space." },
  { q: "How do I get a quote?", a: "Fill out the form below or call us. Quotes are free, fast, and tailored to your space and schedule." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-14" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary mb-5">
            ❓ FAQs
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                data-reveal
                className={`glass rounded-2xl overflow-hidden transition-all ${isOpen ? "shadow-luxury ring-2 ring-electric-blue/40" : "hover:shadow-card"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-display font-semibold text-base sm:text-lg">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICE AREAS ---------- */
const cities = ["Albuquerque","Rio Rancho","Santa Fe","Bernalillo","Los Lunas","Belen","Corrales","Placitas","Edgewood","Moriarty","Cedar Crest","Tijeras","Bosque Farms","Peralta","South Valley"];

function ServiceAreas() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(oklch(0.58 0.25 265 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.58 0.25 265 / 0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-5" data-reveal>
          <MapPin className="w-3.5 h-3.5" /> Service Areas
        </div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl" data-reveal>
          Covering <span className="text-gradient">63 miles</span> of New Mexico
        </h2>
        <p className="mt-4 text-muted-foreground text-lg" data-reveal>
          Proudly serving 15+ cities around Albuquerque, NM.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
          {cities.map((c, i) => (
            <span
              key={c}
              className="group glass rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gradient-brand hover:text-white hover:scale-105 transition-all cursor-default shadow-card"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <MapPin className="inline w-3.5 h-3.5 mr-1.5 text-electric-blue group-hover:text-white" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUOTE FORM ---------- */
function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 10% 20%, oklch(0.58 0.25 265 / 0.5), transparent 40%), radial-gradient(circle at 90% 80%, oklch(0.45 0.25 305 / 0.5), transparent 40%)",
      }} />
      <Particles count={16} />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 text-white" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium border border-white/20 mb-5">
            💬 Free Quote
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
            Get Your <span style={{ background: "linear-gradient(90deg,#E8E0FF,#2E5AFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Free Quote</span> Today
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Tell us about your space and schedule. We'll get back to you fast with a tailored quote.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: Phone, label: "(505) 456-9603", href: "tel:5054569603" },
              { icon: Mail, label: "a1cleaningservicenm@gmail.com", href: "mailto:a1cleaningservicenm@gmail.com" },
              { icon: MapPin, label: "Albuquerque, NM + 63 miles", href: "#" },
              { icon: Clock, label: "Mon–Fri 8am–5pm • 24/7 Emergency", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-3 glass-dark rounded-2xl p-4 border border-white/15 hover:border-electric-blue/60 transition-all animate-float" style={{ animationDelay: `${Math.random()}s` }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium break-all">{c.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form
          data-reveal
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 glass rounded-3xl p-6 sm:p-10 shadow-luxury"
        >
          {sent ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gradient-brand mx-auto flex items-center justify-center glow-blue">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="mt-5 font-display font-bold text-2xl">Thanks! We'll be in touch soon.</h3>
              <p className="mt-2 text-muted-foreground">Daniel typically replies within 1 business hour.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" />
              <Field label="Phone Number" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
              <Field label="City / Zip" name="city" />
              <SelectField label="Service Type" name="service" options={["House Cleaning","Office Cleaning","Hourly","Weekly","Monthly","Annual","Janitorial","Emergency"]} />
              <SelectField label="Schedule Needed" name="schedule" options={["ASAP / Emergency","This Week","This Month","Recurring","Flexible"]} />
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your space…" className="w-full rounded-xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent focus:shadow-[0_0_0_4px_oklch(0.58_0.25_265/0.15)] transition-all" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-brand text-white px-7 py-4 font-semibold shadow-luxury hover:scale-[1.02] transition-transform glow-blue">
                  <MessageSquare className="w-4 h-4" /> Send Request <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full rounded-xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent focus:shadow-[0_0_0_4px_oklch(0.58_0.25_265/0.15)] transition-all"
      />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <select
        name={name}
        className="w-full rounded-xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
