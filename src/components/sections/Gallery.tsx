import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

import svcHouse from "@/assets/service-house.jpg";
import svcOffice from "@/assets/service-office.jpg";
import svcWeekly from "@/assets/service-weekly.jpg";
import svcMonthly from "@/assets/service-monthly.jpg";
import svcJanitorial from "@/assets/service-janitorial.jpg";
import svcEmergency from "@/assets/service-emergency.jpg";

const galleryItems = [
  { title: "House Deep Clean", img: svcHouse, span: "row-span-2" },
  { title: "Office Makeover", img: svcOffice, span: "" },
  { title: "Emergency Cleanup", img: svcEmergency, span: "col-span-2" },
  { title: "Carpet & Floor Detail", img: svcJanitorial, span: "" },
  { title: "Window & Baseboard", img: svcMonthly, span: "" },
  { title: "Weekly Maintenance", img: svcWeekly, span: "" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary mb-5">
            📸 Real Work, Real Results
          </div>
          <h2 className="font-display font-bold" style={{ fontSize: "45px" }}>
            See the <span className="text-gradient">Blue-Purple Difference</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Before & After — Real Work by Daniel Alado</p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]" data-reveal>
          {galleryItems.map((g) => (
            <div
              key={g.title}
              onClick={() => setSelectedImage(g.img)}
              className={`group relative rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all cursor-pointer ${g.span}`}
            >
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

      {/* Lightbox Zoom Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-all duration-300 animate-fade-in cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:scale-110 transition-all z-50"
            aria-label="Close image modal"
          >
            <X className="w-9 h-9 stroke-[2.5]" />
          </button>

          {/* Image Wrapper */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl animate-fade-up cursor-default"
          >
            <img
              src={selectedImage}
              alt="Zoomed portfolio view"
              className="w-full h-full object-contain max-h-[85vh] rounded-3xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
