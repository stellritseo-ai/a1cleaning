import { Phone, Calendar } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)]">
      <div className="glass rounded-2xl shadow-luxury p-3 sm:p-4 flex items-center gap-3 animate-glow-pulse">
        <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-brand items-center justify-center text-lg shrink-0">
          🚨
        </div>
        <div className="hidden md:block leading-tight pr-2">
          <div className="text-xs font-semibold text-foreground">24/7 Emergency Cleaning</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Always available</div>
        </div>
        <a
          href="tel:5054569603"
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand text-white px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-card hover:scale-105 transition-transform"
        >
          <Phone className="w-4 h-4" /> Call Daniel
        </a>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl glass-dark text-foreground px-3 py-2.5 text-xs sm:text-sm font-semibold hover:scale-105 transition-transform border border-border"
        >
          <Calendar className="w-4 h-4" /> Book
        </a>
      </div>
    </div>
  );
}
