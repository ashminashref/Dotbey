"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";

interface NavbarProps {
  onBookCall?: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Experts", href: "/experts" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <div className="w-full max-w-4xl relative">
        {/* Floating Glass Navbar Pill */}
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl text-slate-900 dark:text-white shadow-xl shadow-blue-950/10 border border-slate-200/80 dark:border-slate-800"
              : "bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white shadow-md shadow-black/5 border border-white/60 dark:border-slate-800/80"
          }`}
        >
          {/* Official Dotbey Brand Logo */}
          <Logo variant={theme === "dark" ? "light" : "blue"} />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#0052FF] dark:text-blue-400 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-90"
              aria-label="Toggle Dark and Light Mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={onBookCall}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0052FF] hover:bg-blue-700 px-5 py-2 text-sm font-medium text-white transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-[0.98]"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-90"
              aria-label="Toggle Dark and Light Mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-full text-slate-800 dark:text-slate-100 hover:text-[#0052FF] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>

        {/* Minimal White / Dark Glass Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-16 left-0 right-0 mt-2 p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-blue-950/15 md:hidden flex flex-col gap-4 text-slate-900 dark:text-white z-50 select-none"
            >
              {/* Vertical Minimal Navigation Links */}
              <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 flex items-center justify-between text-base font-semibold transition-colors ${
                        isActive
                          ? "text-[#0052FF] dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-200 hover:text-[#0052FF]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] dark:bg-blue-400" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Minimal Strategy Call Button */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onBookCall) onBookCall();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0052FF] hover:bg-blue-700 active:scale-[0.98] py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all"
                >
                  <span>Book a strategy call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
