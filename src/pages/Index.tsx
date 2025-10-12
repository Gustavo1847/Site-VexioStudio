
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { useRef } from "react";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";
import { Analytics } from "@vercel/analytics/next";

const Index = () => {
  // Ref para animação da página
  const pageRef = useRef<HTMLDivElement>(null);
  // Fade-in suave na página principal
  useGsapFadeIn(pageRef, { duration: 1.2, delay: 0.1 });

  return (
    <div ref={pageRef} className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <Analytics />
    </div>
  );
};

export default Index;
