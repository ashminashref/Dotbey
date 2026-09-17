"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Sparkles, TrendingUp, Award } from "lucide-react";

interface HeroProps {
  onBookCall?: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  // Meaningful & creative agency growth outcomes
  const words = [
    "growth.",
    "momentum.",
    "authority.",
    "future.",
    "impact.",
    "revenue.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] sm:h-screen sm:min-h-[720px] max-h-[1080px] bg-[#0052FF] dark:bg-slate-950 text-white flex flex-col justify-between items-center px-4 pt-20 sm:pt-32 pb-6 overflow-hidden select-none transition-colors duration-300"
    >
      {/* Background Soft Radial Ambient Glow */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-blue-400/25 dark:from-blue-600/15 via-transparent to-transparent pointer-events-none" />

      {/* Top Tagline Badge */}
      <div className="relative z-10 text-center pt-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800 backdrop-blur-md text-xs font-semibold tracking-wide text-blue-100 dark:text-blue-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>DOTBEY GROWTH ENGINE 2.0</span>
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 ml-0.5" />
        </motion.div>
      </div>

      {/* Main Headline & CTAs (Centered) */}
      <div className="relative z-10 max-w-5xl mx-auto text-left sm:text-center flex flex-col items-start sm:items-center my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.12] text-white"
        >
          We don’t build brands, <br className="hidden sm:inline" />
          we build{" "}
          <span className="inline-block relative font-accent font-normal italic">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="inline-block text-white dark:text-blue-400"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg font-normal text-blue-100/90 dark:text-slate-300 max-w-2xl leading-relaxed"
        >
          At Dotbey we create powerful digital strategies that help ambitious brands stand out, connect with the right audience, and grow with confidence.
        </motion.p>

        {/* Ultra-Premium Glassmorphism Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA Button */}
          <Link
            href="/services"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white dark:bg-[#0052FF] text-blue-950 dark:text-white font-bold text-sm sm:text-base hover:bg-blue-50 dark:hover:bg-blue-600 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-blue-950/10 dark:shadow-blue-600/30 border border-white/80 dark:border-blue-500/50 overflow-hidden"
          >
            <span className="relative z-10">Explore our services</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 text-blue-950 dark:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Secondary Glassmorphism CTA Button */}
          <button
            onClick={onBookCall}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 dark:bg-slate-900/80 hover:bg-white/20 dark:hover:bg-slate-800 border border-white/25 dark:border-slate-700 backdrop-blur-xl text-white font-bold text-sm sm:text-base active:scale-[0.98] transition-all duration-300"
          >
            <span>Book a strategy call</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Full-Screen Trust & Metrics Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-10 w-full max-w-6xl mx-auto pt-4 border-t border-white/15 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-blue-100/90 dark:text-slate-300"
      >
        {/* Left Stats Highlights */}
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span><strong className="text-white font-bold">$14M+</strong> Revenue Generated</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-300" />
            <span><strong className="text-white font-bold">99.4%</strong> Retention Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-300 font-bold">10x</span>
            <span>Avg ROAS Impact</span>
          </div>
        </div>

        {/* Right Scroll Indicator */}
        <a
          href="#services"
          className="flex items-center gap-1.5 text-blue-200/80 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>Scroll down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
