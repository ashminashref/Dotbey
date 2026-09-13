"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessBlueprint from "@/components/ProcessBlueprint";
import TechCapabilities from "@/components/TechCapabilities";
import WhyUsComparison from "@/components/WhyUsComparison";
import Experts from "@/components/Experts";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BookCallModal from "@/components/BookCallModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOpenBookCall = (plan?: string) => {
    setSelectedPlan(plan || "Growth Plan");
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Floating Pill Navigation Bar */}
      <Navbar onBookCall={() => handleOpenBookCall("Growth Plan")} />

      {/* Hero Section */}
      <Hero onBookCall={() => handleOpenBookCall("Growth Plan")} />

      {/* Services Grid */}
      <Services onBookCall={() => handleOpenBookCall("Custom Service")} />

      {/* 4-Step Agency Execution Blueprint */}
      <ProcessBlueprint />

      {/* Agency Tech Capabilities & Infrastructure */}
      <TechCapabilities />

      {/* Why Choose Us Agency Comparison Table */}
      <WhyUsComparison />

      {/* Experts Carousel matching Figma Image 1 */}
      <Experts />

      {/* Pricing Grid matching Figma Image 2 & Screenshot 351 */}
      <Pricing onSelectPlan={(plan) => handleOpenBookCall(plan)} />

      {/* About & Values Banner */}
      <section id="about" className="py-20 blue-gradient-card text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3 block">
            Why Choose Dotbey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto">
            We operate like your internal <span className="font-accent font-normal italic">growth team.</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            No bloated agency fluff. Just high-converting Next.js web applications, studio-grade video production, and laser-focused Meta Ads that scale your revenue month after month.
          </p>
          <button
            onClick={() => handleOpenBookCall("Growth Plan")}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Start Your Growth Project
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQ />

      {/* Footer matching Figma Image 4 */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookCallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
