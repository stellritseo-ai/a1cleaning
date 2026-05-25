import { Quote, Star } from "lucide-react";
import { Particles } from "@/components/site/Particles";

const reviews = [
  { name: "Maria G.", role: "Homeowner, Albuquerque", text: "Daniel and his team transformed our home. Every corner sparkled — they truly clean like they own it.", avatar: "M" },
  { name: "Southwest Realty Group", role: "Commercial Client", text: "We trust A-1 for all our property turnovers. Reliable, professional, and the move-out deep cleans are unmatched.", avatar: "S" },
  { name: "James T.", role: "Office Manager, Rio Rancho", text: "Called at 11pm for a flood emergency. They were on-site by midnight. Saved our office. Lifesavers.", avatar: "J" },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden text-white" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.58 0.25 265 / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.45 0.25 305 / 0.3), transparent 50%)",
      }} />
      <Particles count={14} />

      <div className="relative mx-auto max-w-7xl px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium border border-white/20 mb-5" data-reveal>
          ⭐ Reviews
        </div>
        <h2 className="font-display font-bold leading-tight" style={{ fontSize: "45px" }} data-reveal>
          Loved by locals across <span style={{ background: "linear-gradient(90deg,#E8E0FF,#2E5AFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>New Mexico</span>
        </h2>

        {/* 3-Column Reviews Card Grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-6" data-reveal>
          {reviews.map((r) => (
            <div
              key={r.name}
              className="group glass-dark rounded-3xl p-6 sm:p-8 border border-white/15 hover:border-electric-blue/40 shadow-card hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-electric-blue mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm sm:text-base leading-relaxed text-white/90 italic">"{r.text}"</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    {r.avatar}
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-white/60 mt-0.5">{r.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
