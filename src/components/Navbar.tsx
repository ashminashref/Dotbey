"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Home,
  Info,
  Briefcase,
  Tag,
  Users,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

interface NavbarProps {
  onBookCall?: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Pricing", href: "/pricing", icon: Tag },
    { name: "Experts", href: "/experts", icon: Users },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300 pointer-events-none">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-4xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl text-slate-900 shadow-xl shadow-blue-900/5 border border-slate-200/80"
              : "bg-white/95 backdrop-blur-md text-slate-900 shadow-md shadow-black/5"
          }`}
        >
          {/* Official Dotbey Brand Logo in #035DF7 Electric Blue */}
          <Logo variant="blue" />

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
                      ? "text-[#0052FF] font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookCall}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0052FF] hover:bg-blue-700 px-5 py-2 text-sm font-medium text-white transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-[0.98]"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button - iOS Dynamic Island Pill Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0052FF] hover:bg-blue-100 transition-all active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            <span className="text-xs font-semibold">Menu</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.nav>
      </header>

      {/* Apple iOS 18 Dynamic Floating Island Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-xl md:hidden flex flex-col justify-end p-4 pb-8"
          >
            <motion.div
              initial={{ y: 60, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 60, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/40 flex flex-col gap-6 text-slate-900 max-h-[85vh] overflow-y-auto"
            >
              {/* Header inside floating island */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <Logo variant="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Grid Cards */}
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link, idx) => {
                  const IconComp = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 + 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                          isActive
                            ? "bg-[#0052FF] text-white border-[#0052FF] shadow-md shadow-blue-500/20"
                            : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-white text-[#0052FF]"
                          }`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Action Bar */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onBookCall) onBookCall();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0052FF] hover:bg-blue-700 active:scale-[0.98] py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book a strategy call</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 font-normal mt-3">
                  © 2026 dotbey all rights reserved
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
