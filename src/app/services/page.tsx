"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallModal from "@/components/BookCallModal";
import {
  Globe,
  Video,
  Camera,
  Film,
  Palette,
  Target,
  Search,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const fullServices = [
    {
      icon: Globe,
      title: "Web Engineering & Design",
      tagline: "Apple-grade, lightning-fast Next.js web applications built for conversion.",
      deliverables: [
        "Custom Next.js & React App Architecture",
        "Satoshi & Custom Display Typography",
        "Apple-like SaaS Animations (Framer Motion)",
        "Mobile-First Responsive Layouts",
        "Core Web Vitals 95+ Score Optimization",
        "Search Engine Schema & OpenGraph Meta",
      ],
    },
    {
      icon: Target,
      title: "Meta Ads & Performance",
      tagline: "High-ROAS paid advertising management on Facebook & Instagram.",
      deliverables: [
        "Hyper-Targeted Audience & Pixel Setup",
        "A/B Creative Hook & Ad Copy Testing",
        "Retargeting & LAL Audience Funnels",
        "ROAS & Cost-Per-Lead Dashboard Tracking",
        "Weekly Scale Adjustments & Budget Mgmt",
        "Direct API Lead Form Integration",
      ],
    },
    {
      icon: Video,
      title: "Video Production",
      tagline: "Cinematic commercial videos, brand storytelling, and product shoots in 4K.",
      deliverables: [
        "4K Studio & Location Video Shoots",
        "Professional Lighting & Audio Capture",
        "Commercial Brand Storytelling & Scripts",
        "Product Highlight & UGC Shoots",
        "Director & Cinematographer Crew",
        "Raw Footage Delivery & Color Grading",
      ],
    },
    {
      icon: Film,
      title: "Video Editing & Post Production",
      tagline: "High-retention reel edits, sound design, and motion graphics for social viral reach.",
      deliverables: [
        "High-Engagement Reel & Shorts Edits",
        "Dynamic Captions & Sound FX Mastering",
        "Motion Graphics & Title Animations",
        "Color Grading & Cinematic LUTs",
        "Multi-Format Delivery (9:16, 16:9, 1:1)",
        "Fast 48-Hour Edit Turnaround",
      ],
    },
    {
      icon: Camera,
      title: "Studio Photography",
      tagline: "High-end product photography, executive portraits, and lifestyle imagery.",
      deliverables: [
        "Studio Product Shoots with Props",
        "Executive & Founder Portraiture",
        "Lifestyle & Outdoor Brand Photography",
        "High-Resolution RAW & Retouched JPGs",
        "E-Commerce Catalog Images",
        "Social Media Creative Assets",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design & Posters",
      tagline: "UI/UX design systems, brand identity, poster design, and ad creatives.",
      deliverables: [
        "Brand Identity & Style Guidelines",
        "High-Converting Social Media Creatives",
        "Print & Digital Poster Designs",
        "SaaS Web & Mobile UI Mockups",
        "Vector Logos & Typography Packages",
        "Marketing Collaterals & Decks",
      ],
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      tagline: "Rank #1 on Google search for high-intent client keywords.",
      deliverables: [
        "Technical SEO Site Audits & Fixes",
        "Keyword Research & Search Intent Mapping",
        "On-Page Content & Meta Tag Tuning",
        "High-Authority Backlink Acquisition",
        "Structured Data & Schema Injection",
        "Monthly Ranking & Organic Traffic Reports",
      ],
    },
    {
      icon: Sparkles,
      title: "360° Brand Strategy",
      tagline: "End-to-end positioning, competitor analysis, and multi-channel growth funnels.",
      deliverables: [
        "Market Positioning & Competitor Audit",
        "Customer Persona & Value Proposition",
        "Tone of Voice & Messaging Architecture",
        "Multi-Channel Campaign Launch Strategy",
        "Growth KPI & Funnel Mapping",
        "Quarterly Executive Review Sessions",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar onBookCall={() => setModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#0052FF] text-white pt-36 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-200 block mb-3">
            AGENCY SERVICES
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Full-spectrum digital <br className="hidden sm:inline" />
            marketing <span className="font-accent italic font-normal">mastery.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore Dotbey's specialized service capabilities engineered to turn visual brand storytelling into scalable client acquisition.
          </p>
        </div>
      </section>

      {/* Services Grid Breakdown */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-600 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052FF] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
                      Key Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                          <Check className="w-3.5 h-3.5 text-[#0052FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052FF] hover:text-blue-700 transition-colors"
                  >
                    <span>Request proposal for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0052FF] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Need a custom package for your brand?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base font-normal mb-8">
            Tell us about your campaign goals and we will prepare a tailor-made agency scope within 2 hours.
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
