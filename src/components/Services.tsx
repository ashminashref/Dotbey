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
      description: "Lightning-fast, SEO-optimized, Next.js web applications and high-conversion landing pages.",
      image: "/images/services/blue-1.jpg",
    },
    {
      icon: Video,
      title: "Video Production & Editing",
      description: "High-retention video editing, reel edits, sound design, motion graphics, and 4K commercial videos.",
      image: "/images/services/blue-2.jpg",
    },
    {
      icon: Sparkles,
      title: "Brand Strategy & Growth",
      description: "End-to-end digital positioning, market foresight, competitor analysis, and revenue multipliers.",
      image: "/images/services/blue-3.jpg",
    },
    {
      icon: Camera,
      title: "Studio Photography & Visual Arts",
      description: "Professional product shoots, founder portraiture, corporate lifestyle, and abstract 3D visual concepts.",
      image: "/images/services/blue-4.jpg",
    },
    {
      icon: Target,
      title: "Meta Ads & Performance",
      description: "Data-backed ad campaigns across Facebook & Instagram with hyper-targeted audience modeling.",
      image: "/images/services/blue-5.jpg",
    },
    {
      icon: Palette,
      title: "Graphic Design & Posters",
      description: "Brand identity systems, high-converting social media creatives, print posters, and packaging.",
      image: "/images/services/blue-1.jpg",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical SEO audits, keyword strategy, backlink acquisition, and high organic ranking.",
      image: "/images/services/blue-2.jpg",
    },
    {
      icon: Film,
      title: "Motion Graphics & Reels",
      description: "Dynamic keyframe animations, viral social hooks, and 3D visual effects for modern brands.",
      image: "/images/services/blue-3.jpg",
    },
  ];

  return (
    <section id="services" className="py-28 bg-slate-50/50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0052FF] mb-2 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              What we <span className="font-accent italic font-normal text-[#0052FF]">do best.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            End-to-end digital marketing and creative engineering tailored to deliver measurable revenue growth.
          </p>
        </div>

        {/* 4-Column Visual Grid with Electric Blue Abstract Glass Photo Cards */}
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
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0052FF]/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header Card */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-[#0052FF] flex items-center justify-center shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0052FF] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-semibold text-[#0052FF]">
                  <span>Enquire service</span>
                  <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#0052FF] group-hover:text-white flex items-center justify-center transition-colors">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors"
          >
            <span>View detailed services breakdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
