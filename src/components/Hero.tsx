"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      className="relative min-h-[90vh] w-full bg-[#0052FF] text-white flex flex-col justify-center items-center px-4 pt-32 pb-16 overflow-hidden"
    >
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-blue-400/25 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-left sm:text-center flex flex-col items-start sm:items-center">
        {/* Main Headline with Standard Blurred Fade Text Transition */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.15] text-white"
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
                className="inline-block text-white"
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
          className="mt-6 text-base sm:text-lg font-normal text-blue-100/90 max-w-2xl leading-relaxed"
        >
          At Dotbey we create powerful digital strategies that help ambitious brands stand out, connect with the right audience, and grow with confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Explore our services CTA */}
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-blue-900 font-semibold text-sm sm:text-base hover:bg-blue-50 transition-all shadow-md active:scale-[0.98]"
          >
            <span>Explore our services</span>
          </Link>

          {/* Book a call CTA */}
          <button
            onClick={onBookCall}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base transition-all shadow-md active:scale-[0.98]"
          >
            <span>Book a call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
