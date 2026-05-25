import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-500 ${scrolled ? "scale-[0.99]" : ""
          }`}
      >
        <nav
          className={`glass rounded-2xl px-5 py-3 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "shadow-card" : ""
            }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src={logo}
              alt="A-1 Cleaning Services Logo"
              className="h-16 sm:h-18 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Center menu */}
          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <div className="flex flex-col items-end gap-0.5">
              <a
                href="tel:5054569603"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                <Phone className="w-4 h-4 text-electric-blue" />
                (505) 456-9603
              </a>
              <a
                href="tel:18886809992"
                className="flex items-center gap-2 text-xs font-medium text-electric-blue hover:text-foreground"
              >
                <Phone className="w-3.5 h-3.5" />
                Toll-Free: +1 888 680 9992
              </a>
            </div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-brand text-white px-5 py-2.5 text-sm font-semibold shadow-card hover:scale-105 transition-transform"
            >
              🧼 Get a Quote
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-5 animate-fade-up">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-2 text-base font-medium text-foreground/90"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <a href="tel:5054569603" className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-electric-blue" /> (505) 456-9603
              </a>
              <a href="tel:18886809992" className="flex items-center gap-2 text-sm text-electric-blue">
                <Phone className="w-4 h-4" /> Toll-Free: +1 888 680 9992
              </a>
              <a href="mailto:a1cleaningservicenm@gmail.com" className="flex items-center gap-2 text-sm break-all">
                <Mail className="w-4 h-4 text-electric-blue" /> a1cleaningservicenm@gmail.com
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-xl bg-gradient-brand text-white py-3 font-semibold mt-2"
              >
                🧼 Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
