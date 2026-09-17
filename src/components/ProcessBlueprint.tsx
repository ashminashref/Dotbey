"use client";

import { motion } from "framer-motion";
import { Search, Zap, Target, BarChart2 } from "lucide-react";

export default function ProcessBlueprint() {
  const steps = [
    {
      num: "01",
      title: "Brand & Funnel Audit",
      timeline: "Days 1 - 2",
      icon: Search,
      description: "We analyze your existing market positioning, competitor creative hooks, and conversion bottlenecks to build your customized growth roadmap.",
    },
    {
      num: "02",
      title: "Next.js & Creative Build",
      timeline: "Days 3 - 5",
      icon: Zap,
      description: "Our studio produces high-converting Next.js web components, 4K reel edits, and ad copy optimized for high retention and speed.",
    },
    {
      num: "03",
      title: "Omnichannel Ad Launch",
      timeline: "Days 6 - 7",
      icon: Target,
      description: "We deploy targeted Meta Ads and Google Search campaigns, structuring automated A/B tests to identify winning audience segments.",
    },
    {
      num: "04",
      title: "Daily Scaling & Revenue Sync",
      timeline: "Ongoing",
      icon: BarChart2,
      description: "Continuous real-time bid adjustments, creative refreshes, and direct Slack updates with founder leadership to maximize your ROAS.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0052FF] dark:text-blue-400 block mb-3">
            AGENCY EXECUTION PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Our 4-step agency <span className="font-accent italic font-normal text-[#0052FF] dark:text-blue-400">blueprint.</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            How Dotbey takes your brand from initial discovery to high-velocity scaling in 7 days.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between hover:border-[#0052FF]/40 dark:hover:border-blue-500/50 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-300 dark:text-slate-700 group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#0052FF] dark:text-blue-400 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#0052FF] dark:text-blue-400 bg-blue-50 dark:bg-slate-800 px-2.5 py-1 rounded-md mb-3">
                    {step.timeline}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                    {step.description}
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
