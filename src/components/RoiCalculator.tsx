"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Users, DollarSign, ArrowUpRight } from "lucide-react";

interface RoiCalculatorProps {
  onBookCall?: () => void;
}

export default function RoiCalculator({ onBookCall }: RoiCalculatorProps) {
  const [adBudget, setAdBudget] = useState(50000);
  const [avgOrderValue, setAvgOrderValue] = useState(2500);

  // Growth formulas
  const estimatedLeads = Math.round((adBudget / 150) * 1.4);
  const estimatedConversions = Math.round(estimatedLeads * 0.12);
  const estimatedRevenue = Math.round(estimatedConversions * avgOrderValue);
  const estimatedRoas = (estimatedRevenue / adBudget).toFixed(1);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>INTERACTIVE GROWTH ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Calculate your <span className="font-accent italic font-normal text-blue-400">growth return.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            Drag the sliders below to forecast your estimated leads, monthly revenue impact, and ROAS with Dotbey.
          </p>
        </div>

        {/* Calculator Card Grid */}
        <div className="max-w-5xl mx-auto bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Monthly Ad Budget */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">
                  Monthly Ad & Strategy Budget (INR)
                </label>
                <span className="text-lg font-bold text-[#0052FF] bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">
                  ₹{adBudget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={adBudget}
                onChange={(e) => setAdBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-normal mt-1.5">
                <span>₹10,000</span>
                <span>₹1,50,000</span>
                <span>₹3,00,000</span>
              </div>
            </div>

            {/* Slider 2: Average Customer Value */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">
                  Average Customer / Order Value (INR)
                </label>
                <span className="text-lg font-bold text-[#0052FF] bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">
                  ₹{avgOrderValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-normal mt-1.5">
                <span>₹500</span>
                <span>₹12,500</span>
                <span>₹25,000</span>
              </div>
            </div>
          </div>

          {/* Forecast Output Column */}
          <div className="lg:col-span-5 bg-[#0052FF] rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block mb-4">
                ESTIMATED MONTHLY RESULTS
              </span>

              <div className="space-y-5">
                {/* Metric 1 */}
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-100">Est. Qualified Leads</span>
                  </div>
                  <span className="text-xl font-bold text-white">{estimatedLeads} / mo</span>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-100">Est. Monthly Revenue</span>
                  </div>
                  <span className="text-xl font-bold text-white">₹{estimatedRevenue.toLocaleString()}</span>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-100">Target ROAS Multiple</span>
                  </div>
                  <span className="text-2xl font-black text-amber-300">{estimatedRoas}x</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookCall}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-blue-50 text-[#0052FF] font-semibold text-xs py-3.5 transition-all shadow-lg active:scale-98"
            >
              <span>Unlock This Forecast</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
