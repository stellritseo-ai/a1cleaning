import { MapPin } from "lucide-react";

const cities = [
  "Albuquerque", "Rio Rancho", "Santa Fe", "Bernalillo", 
  "Los Lunas", "Belen", "Corrales", "Placitas", 
  "Edgewood", "Moriarty", "Cedar Crest", "Tijeras", 
  "Bosque Farms", "Peralta", "South Valley"
];

export function ServiceAreas() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute inset-0 bg-gradient-soft opacity-60" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(oklch(0.58 0.25 265 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.58 0.25 265 / 0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Google Map Embed Frame */}
          <div className="lg:col-span-5 relative" data-reveal>
            {/* Outer glowing backdrop frame */}
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-white/20 h-[300px] sm:h-[400px] lg:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208958.64661445262!2d-106.83679321593563!3d35.08226111435563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd309837b%3A0xc0d3f8ceb8d9f6fd!2sAlbuquerque%2C%20NM%2C%20USA!5e0!3m2!1sen!2snp!4v1779739319677!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Albuquerque, NM service coverage map"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Title and Clean City Tags Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-5 w-fit">
              <MapPin className="w-3.5 h-3.5" /> Service Areas
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
              Covering <span className="text-gradient">63 miles</span> of New Mexico
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">
              Proudly serving 15+ cities around Albuquerque, NM with flexible, reliable residential & commercial cleaning.
            </p>

            {/* Structured Tags Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((c, i) => (
                <span
                  key={c}
                  className="group glass rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium hover:bg-gradient-brand hover:text-white hover:scale-105 transition-all cursor-default shadow-card border border-white/10 flex items-center"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <MapPin className="w-3.5 h-3.5 mr-2 text-electric-blue group-hover:text-white shrink-0" />
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
