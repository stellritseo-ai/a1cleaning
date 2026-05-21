import { Sparkles, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.58 0.25 265 / 0.4), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.45 0.25 305 / 0.4), transparent 40%)",
      }} />

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold">A-1 Cleaning</div>
                <div className="text-xs opacity-70">We Clean Like We Own It</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Albuquerque's trusted blue-purple standard in luxury residential & commercial cleaning. 10 years strong, 63-mile radius, 24/7 emergency response.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg glass-dark border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-electric-blue" /> <a href="tel:5054569603" className="hover:text-white">(505) 456-9603</a></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-electric-blue" /> <a href="mailto:a1cleaningservicenm@gmail.com" className="hover:text-white break-all">a1cleaningservicenm@gmail.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-electric-blue" /> Albuquerque, NM + 63 miles</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Hours</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-electric-blue" /> Mon–Fri: 8:00 AM – 5:00 PM</li>
              <li className="pl-6">Sat–Sun: By appointment</li>
              <li className="pl-6 text-electric-blue font-medium">🚨 24/7 Emergency Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["Home","Services","Gallery","Why Us","Reviews","FAQs","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ","")}`} className="hover:text-white link-underline">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">© 2025 A-1 Cleaning Services LLC | Blue-Purple Clean You Can Trust</p>
          <p className="text-xs text-white/60">Designed with 💜💙 in New Mexico</p>
        </div>
      </div>
    </footer>
  );
}
