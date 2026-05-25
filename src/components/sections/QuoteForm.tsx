import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare, CheckCircle2
} from "lucide-react";
import { Particles } from "@/components/site/Particles";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
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
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-[35px] leading-tight">
            Get Your <span style={{ background: "linear-gradient(90deg,#E8E0FF,#2E5AFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Free Quote</span> Today
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed text-sm sm:text-base">
            Tell us about your space and schedule. We'll get back to you fast with a tailored quote.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: Phone, label: "(505) 456-9603", href: "tel:5054569603" },
              { icon: Phone, label: "+1 888 680 9992 (Toll-Free)", href: "tel:18886809992" },
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
          className="lg:col-span-3 glass rounded-3xl p-6 sm:p-10 shadow-luxury w-full"
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
                <textarea name="message" rows={4} placeholder="Tell us about your space…" className="w-full rounded-xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent focus:shadow-[0_0_0_4px_rgba(46,90,255,0.15)] transition-all" />
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
        className="w-full rounded-xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent focus:shadow-[0_0_0_4px_rgba(46,90,255,0.15)] transition-all"
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
