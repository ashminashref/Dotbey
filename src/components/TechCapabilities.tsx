"use client";

import { motion } from "framer-motion";
import { Gauge, Sparkles, Video, Cpu, Palette, MessageSquare } from "lucide-react";

export default function TechCapabilities() {
  const capabilities = [
    {
      title: "Next.js 14 Speed Engine",
      subtitle: "Sub-Second Page Performance",
      icon: Gauge,
      description: "Custom SSR & SSG web architecture ensuring 99+ Google Lighthouse scores, lightning-fast rendering, and instant search indexing.",
      badge: "Core Stack",
    },
    {
      title: "Framer Motion Micro-Physics",
      subtitle: "Apple-Grade Spring Animations",
      icon: Sparkles,
      description: "Dynamic fluid gestures, 60fps micro-interactions, and glassmorphism UI elements that feel alive and engage every visitor.",
      badge: "UI Engineering",
    },
    {
      title: "In-House 4K Cinema Studio",
      subtitle: "High-Retention Reel Production",
      icon: Video,
      description: "Sony Alpha cinema camera setups, DMX studio lighting, and DaVinci Resolve color grading for viral reels and high-converting ad creative.",
      badge: "Media Studio",
    },
    {
      title: "Meta Pixel & Conversion API",
      subtitle: "AI Lead Scoring Integration",
      icon: Cpu,
      description: "Server-side event tracking and custom AI attribution setups to ensure zero lost leads and optimized ROAS bidding algorithms.",
      badge: "Ad Tech",
    },
    {
      title: "Satoshi & Playfair Design System",
      subtitle: "Modern Agency Aesthetics",
      icon: Palette,
      description: "Curated typography scale, royal electric blue palette, and strict grid spacing tailored to make your brand look world-class.",
      badge: "Design Tokens",
    },
    {
      title: "Direct Founder Sync & SLA",
      subtitle: "Zero Middlemen Friction",
      icon: MessageSquare,
      description: "Direct 24/7 Slack and WhatsApp access to our founders and lead developers with guaranteed under-30-minute response SLAs.",
      badge: "Client Support",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-[#0052FF] dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AGENCY CAPABILITIES & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Engineered to make your brand <span className="font-accent italic font-normal text-[#0052FF] dark:text-blue-400">stand out.</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            We combine high-performance Web Engineering, 4K Studio Media, and Meta Performance Marketing under one roof.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, idx) => {
            const IconComp = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group relative bg-slate-50/70 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between hover:bg-white dark:hover:bg-slate-850 hover:border-[#0052FF]/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#0052FF] dark:text-blue-400 shadow-sm group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0052FF] dark:text-blue-400 bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 px-2.5 py-1 rounded-md">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3">
                    {cap.subtitle}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
