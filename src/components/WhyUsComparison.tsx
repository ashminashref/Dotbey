"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, Zap } from "lucide-react";

export default function WhyUsComparison() {
  const comparisonData = [
    {
      feature: "Project Delivery Speed",
      other: "4 to 8 weeks slow timelines",
      dotbey: "3 to 7 days rapid deployment",
    },
    {
      feature: "Technology Stack",
      other: "Slow WordPress or Wix templates",
      dotbey: "Next.js 14, Satoshi, Framer Motion",
    },
    {
      feature: "Pricing Transparency",
      other: "Confusing retainers & change fees",
      dotbey: "100% Predictable monthly pricing",
    },
    {
      feature: "Success Metric Focus",
      other: "Vanity impressions & reach reports",
      dotbey: "Bottom-line revenue & qualified leads",
    },
    {
      feature: "Media & Studio Production",
      other: "Generic stock photography",
      dotbey: "In-house 4K studio & reel editing",
    },
    {
      feature: "Founder Communication",
      other: "Slow email ticketing middlemen",
      dotbey: "Direct Slack & WhatsApp to founders",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0052FF] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DOTBEY DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Why ambitious brands choose <span className="font-accent italic font-normal text-[#0052FF]">Dotbey.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
            See how our modern tech-driven creative engine outpaces traditional bloated agencies.
          </p>
        </div>

        {/* 2-Column Grid: Visual Image Banner + Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Photography Studio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-slate-900 rounded-3xl overflow-hidden relative flex flex-col justify-between p-8 text-white min-h-[380px] border border-slate-800 shadow-xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Dotbey Agency Team & Studio"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0052FF] text-white text-[11px] font-bold uppercase tracking-wider mb-4 shadow-md">
                <Zap className="w-3.5 h-3.5" />
                <span>AGILITY FIRST</span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight leading-snug">
                Built like a modern tech studio, not an old agency.
              </h3>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10">
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                We combine Next.js web speed, 4K camera gear, and Meta ad bidding algorithms to scale your revenue without agency bloat.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden flex flex-col justify-between">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-100/80 p-4 sm:p-5 border-b border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="col-span-4 sm:col-span-4">Metric</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">Traditional Agencies</div>
              <div className="col-span-4 sm:col-span-4 text-[#0052FF] flex items-center gap-1 font-bold">
                <span>Dotbey Agency</span>
                <span className="w-2 h-2 rounded-full bg-[#0052FF] inline-block" />
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100 flex-1">
              {comparisonData.map((item, idx) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className={`grid grid-cols-12 p-4 sm:p-5 items-center transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <div className="col-span-4 sm:col-span-4 font-semibold text-xs sm:text-sm text-slate-900 pr-2">
                    {item.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm text-slate-400 font-normal flex items-start gap-1.5 pr-2">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item.other}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm font-semibold flex items-start gap-1.5 bg-blue-50/60 -my-2.5 -mx-2 p-2.5 sm:p-3 rounded-xl border border-blue-100/80">
                    <Check className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                    <span className="text-[#0052FF]">{item.dotbey}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
