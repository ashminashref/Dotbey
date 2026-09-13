"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallModal from "@/components/BookCallModal";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Award, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const values = [
    {
      icon: Zap,
      title: "Speed & Execution",
      description: "We ship high-performance Next.js websites and launch high-converting Meta ad campaigns in days, not months.",
    },
    {
      icon: ShieldCheck,
      title: "Data & Transparency",
      description: "No vanity metrics. We measure success by bottom-line revenue, lead volume, and clear ROAS dashboards.",
    },
    {
      icon: Award,
      title: "Studio Quality",
      description: "Cinematic 4K video shoots, high-retention reel edits, and Apple-grade UI/UX design standard for every client.",
    },
    {
      icon: Target,
      title: "Dedicated Growth Focus",
      description: "We don't just build brands; we function as your outsourced internal growth acceleration team.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar onBookCall={() => setModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#0052FF] text-white pt-36 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-200 block mb-3">
            ABOUT DOTBEY
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            We don't build brands, <br className="hidden sm:inline" />
            we build <span className="font-accent italic font-normal">growth.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Dotbey is a premier full-service digital marketing and creative engineering agency. We partner with ambitious founders, startups, and established enterprises to dominate their market.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              Engineering digital momentum for modern market leaders.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-4">
              Founded with a mission to eliminate slow, traditional agency overhead, Dotbey combines technical web engineering with high-impact creative production and performance media buying.
            </p>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6">
              Whether deploying high-speed Next.js web applications, producing commercial video shoots, or running multi-channel Meta advertising, we guarantee extreme precision and relentless optimization.
            </p>
            <div className="space-y-3">
              {["100+ Brands Scaled Globally", "10.4x Average Client ROI", "Zero Bloated Agency Overhead"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Dotbey Agency Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
              Our core <span className="font-accent italic font-normal">principles</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              How we deliver world-class digital agency standard to every partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div key={v.title} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052FF] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0052FF] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Ready to accelerate your brand's growth?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base font-normal mb-8">
            Book a 30-minute strategy session with Dotbey founders today.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#0052FF] font-medium text-sm hover:bg-blue-50 transition-colors shadow-md"
          >
            <span>Book a strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
      <BookCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
