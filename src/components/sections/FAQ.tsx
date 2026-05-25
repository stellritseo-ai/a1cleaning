import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import faqImg from "@/assets/service-monthly.jpg";

const faqs = [
  { q: "What areas do you serve?", a: "We serve Albuquerque, NM and a 63-mile radius — including Rio Rancho, Santa Fe, Bernalillo, Los Lunas, and 11+ more cities." },
  { q: "Do you really offer 24/7 emergency cleaning?", a: "Yes. We're on-call around the clock for water damage, urgent cleanup, and restoration emergencies — call (505) 456-9603 anytime." },
  { q: "Are you licensed and insured?", a: "Absolutely. A-1 Cleaning Services LLC is fully licensed and insured for residential and commercial work." },
  { q: "What's included in a deep cleaning?", a: "Floors, baseboards, kitchens, bathrooms, windows, dusting, sanitizing high-touch areas — anything you'd want spotless if you owned the space." },
  { q: "How do I get a quote?", a: "Fill out the form below or call us. Quotes are free, fast, and tailored to your space and schedule." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute inset-0 bg-gradient-soft opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Interactive Accordions */}
          <div className="lg:col-span-7 flex flex-col justify-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary mb-5 w-fit">
              ❓ FAQs
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[45px] leading-tight mb-8">
              Questions, <span className="text-gradient">answered</span>
            </h2>

            {/* Accordions Stack */}
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? "shadow-luxury ring-2 ring-electric-blue/40 bg-white/60" : "hover:shadow-card"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none"
                    >
                      <span className="font-display font-semibold text-foreground text-base sm:text-lg">{f.q}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Modern Luxury Image Showcase */}
          <div className="lg:col-span-5 relative" data-reveal>
            {/* Background glowing frame */}
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-white/20">
              <img
                src={faqImg}
                alt="Spotless detailed living room"
                className="w-full h-[320px] sm:h-[450px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Support Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-luxury animate-float border border-white/20 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-foreground">24/7 Call Support</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">(505) 456-9603</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
