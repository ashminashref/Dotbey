"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Video,
  Camera,
  Film,
  Palette,
  Target,
  Search,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

interface ServicesProps {
  onBookCall?: () => void;
}

export default function Services({ onBookCall }: ServicesProps) {
  const services = [
    {
      icon: Globe,
      title: "Web Engineering",
      description: "Lightning-fast, SEO-optimized Next.js web applications and high-conversion landing pages.",
      image: "/images/services/web_code_glass.jpg",
    },
    {
      icon: Video,
      title: "Video Production & Commercials",
      description: "4K commercial video production, cinema cameraman studio shoots, brand storytelling, and high-end video content.",
      image: "/images/services/cameraman_blue_studio.jpg",
    },
    {
      icon: Film,
      title: "Video Editing & Reels",
      description: "High-retention reel edits, sequence timing, color grading wheel correction, sound design, and motion graphics.",
      image: "/images/services/video_editor_dark.jpg",
    },
    {
      icon: Sparkles,
      title: "Brand Strategy & Growth",
      description: "End-to-end digital positioning, upward growth modeling, competitor analysis, and revenue multipliers.",
      image: "/images/services/brand_growth_arrow.jpg",
    },
    {
      icon: Camera,
      title: "Studio Photography & Visuals",
      description: "Professional camera studio setups, warm spotlight lighting, founder portraiture, product shoots, and visual assets.",
      image: "/images/services/photo_studio_lights.jpg",
    },
    {
      icon: Palette,
      title: "Graphic Design & Posters",
      description: "Brand identity systems, Photoshop & Illustrator vector toolbars, print posters, and creative assets.",
      image: "/images/services/design_tools_hand.jpg",
    },
    {
      icon: Target,
      title: "Meta Ads & Performance",
      description: "Data-backed ad campaigns across Facebook & Instagram with hyper-targeted audience modeling and megaphone reach.",
      image: "/images/services/blue_megaphone_seo.jpg",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical SEO audits, keyword strategy, backlink acquisition, and high organic ranking.",
      image: "/images/services/blue-2.jpg",
    },
  ];

  return (
    <section id="services" className="py-28 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-slate-800/80 select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0052FF] dark:text-blue-400 mb-2 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
              What we <span className="font-accent italic font-normal text-[#0052FF] dark:text-blue-400">do best.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            End-to-end digital marketing and creative engineering tailored to deliver measurable revenue growth.
          </p>
        </div>

        {/* 4-Column Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={onBookCall}
                className="group rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0052FF]/40 dark:hover:border-blue-500/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header Card */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#0052FF] dark:text-blue-400 flex items-center justify-center shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-semibold text-[#0052FF] dark:text-blue-400">
                  <span>Enquire service</span>
                  <div className="w-7 h-7 rounded-full bg-blue-50 dark:bg-slate-800 group-hover:bg-[#0052FF] dark:group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052FF] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View detailed services breakdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
