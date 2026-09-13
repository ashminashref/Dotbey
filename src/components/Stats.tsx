"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const metrics = [
    { label: "Projects Delivered", value: "500+", suffix: "Web & Video" },
    { label: "Client Retention Rate", value: "98%", suffix: "Long-term partners" },
    { label: "Average ROI Generated", value: "10.4x", suffix: "Client growth multiplier" },
    { label: "Meta Ads Spend Managed", value: "₹5Cr+", suffix: "High-performance ads" },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
                {metric.value}
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-blue-400">
                {metric.label}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">
                {metric.suffix}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
