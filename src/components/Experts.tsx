"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Expert {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { name: string; url: string }[];
}

const expertsData: Expert[] = [
  {
    id: "john-newman",
    name: "John newman",
    role: "CEO & CO - Founder",
    bio: "Guy with strong leadership and strategic thinking, always asking questions and making proper decisions. Winning with us over 5000 rewards.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Insta", url: "https://instagram.com" },
      { name: "X", url: "https://x.com" },
      { name: "Linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "carter-john",
    name: "Carter john",
    role: "Photographer cum Videographer",
    bio: "Passionate photographer and videographer producing cinematic 4K brand visuals, commercial shoots, and high-retention post-production.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Insta", url: "https://instagram.com" },
      { name: "X", url: "https://x.com" },
      { name: "Linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "richard-mille",
    name: "Richard Mille",
    role: "Creative director cum Developer",
    bio: "Creative director leading Next.js web architecture, interactive UI systems, and SaaS-grade animation design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Insta", url: "https://instagram.com" },
      { name: "X", url: "https://x.com" },
      { name: "Linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Senior Meta Ads Strategist",
    bio: "Data-driven performance marketer managing over ₹5Cr+ in Meta ad spend with continuous A/B creative testing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Insta", url: "https://instagram.com" },
      { name: "X", url: "https://x.com" },
      { name: "Linkedin", url: "https://linkedin.com" },
    ],
  },
];

export default function Experts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % expertsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? expertsData.length - 1 : prev - 1));
  };

  // Carousel items window
  const visibleExperts = [
    expertsData[currentIndex],
    expertsData[(currentIndex + 1) % expertsData.length],
    expertsData[(currentIndex + 2) % expertsData.length],
  ];

  return (
    <section id="experts" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Meet our <span className="font-accent font-normal italic text-slate-900 dark:text-blue-400">experts</span>
          </h2>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#0052FF] hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous Expert"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#0052FF] hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Next Expert"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleExperts.map((expert, idx) => {
            const isHovered = hoveredId === expert.id;

            return (
              <div
                key={`${expert.id}-${idx}`}
                onMouseEnter={() => setHoveredId(expert.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-[460px] w-full rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-100 dark:bg-slate-900 border dark:border-slate-800"
              >
                {/* Photo View */}
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-xs font-normal text-slate-300">
                    {expert.role}
                  </p>
                </div>

                {/* Electric Blue Details Card (Revealed on Hover) */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 z-20 bg-[#0052FF] dark:bg-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between border dark:border-blue-500/30 ${
                    isHovered ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-medium text-blue-200 dark:text-blue-400 mb-6">
                      {expert.role}
                    </p>
                    <p className="text-sm font-normal text-blue-50/90 dark:text-slate-300 leading-relaxed">
                      {expert.bio}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-white/20 dark:border-slate-800">
                    {expert.socials.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-100 dark:text-blue-400 hover:text-white transition-colors"
                      >
                        {soc.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
