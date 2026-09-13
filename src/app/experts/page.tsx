"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experts from "@/components/Experts";
import BookCallModal from "@/components/BookCallModal";

export default function ExpertsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar onBookCall={() => setModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#0052FF] text-white pt-36 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-200 block mb-3">
            AGENCY TEAM & LEADERSHIP
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Meet the minds behind <br className="hidden sm:inline" />
            the <span className="font-accent italic font-normal">results.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Hover over any expert card below to view their background, executive role, and direct social channels.
          </p>
        </div>
      </section>

      {/* Experts Carousel Section */}
      <Experts />

      <Footer />
      <BookCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
