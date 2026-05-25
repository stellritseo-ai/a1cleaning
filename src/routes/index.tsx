import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { useReveal } from "@/hooks/useReveal";

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
