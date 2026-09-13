"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, TrendingUp, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Web Apps" | "Reels & Video" | "Meta Ads";
  metric: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "luxe-ecommerce",
    title: "Apex E-Commerce Platform",
    category: "Web Apps",
    metric: "+340% Revenue Growth",
    description: "Next.js 14 storefront with sub-second page loads and seamless Stripe checkout integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cinematic-reels",
    title: "Verve Brand Film & Reels",
    category: "Reels & Video",
    metric: "4.8M Organic Reel Views",
    description: "4K studio production, color grading, and high-retention reel edits driving viral brand awareness.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "meta-scaling",
    title: "Aura Skincare Meta Campaign",
    category: "Meta Ads",
    metric: "11.2x Target ROAS",
    description: "Multi-funnel ad account restructuring, dynamic creative testing, and lookalike retargeting.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "saas-dashboard",
    title: "Pulse SaaS Dashboard UI",
    category: "Web Apps",
    metric: "0.3s Page Load Speed",
    description: "Ultra-fast Next.js dashboard interface designed with glassmorphism and Satoshi typography.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Web Apps" | "Reels & Video" | "Meta Ads">("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052FF] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN CLIENT RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Work that drives <span className="font-accent italic font-normal text-[#0052FF]">growth.</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(["All", "Web Apps", "Reels & Video", "Meta Ads"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-[#0052FF] text-white shadow-md shadow-blue-600/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold shadow-md">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.metric}</span>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0052FF] block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-between group-hover:text-[#0052FF] transition-colors">
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
