"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BookCallModal from "@/components/BookCallModal";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar onBookCall={() => setModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#0052FF] dark:bg-slate-900 text-white pt-36 pb-20 px-4 text-center border-b dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-200 dark:text-blue-400 block mb-3">
            TRANSPARENT PRICING
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Simple, predictable <br className="hidden sm:inline" />
            agency <span className="font-accent italic font-normal text-white dark:text-blue-400">investment.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-blue-100/90 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            No hidden retainers or confusing agency tiers. Choose a package tailored to your exact monthly growth stage.
          </p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Pricing FAQ */}
      <FAQ />

      <Footer />
      <BookCallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
