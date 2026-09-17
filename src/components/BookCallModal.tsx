"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string | null;
}

export default function BookCallModal({
  isOpen,
  onClose,
  selectedPlan,
}: BookCallModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    notes: "",
    plan: selectedPlan || "Growth Strategy",
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Graceful fallback
    } finally {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#0052FF", "#3B82F6", "#60A5FA"],
      });
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Apple Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetForm}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-lg"
        />

        {/* Minimal Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden my-auto text-slate-900 dark:text-white"
        >
          {/* Close Button */}
          <button
            onClick={resetForm}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            /* Success View */
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-slate-800 text-[#0052FF] dark:text-blue-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                Call Request Received!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs max-w-xs leading-relaxed mb-6">
                Thank you <span className="font-semibold text-slate-800 dark:text-slate-200">{formData.name}</span>. Our team will reach out to <span className="font-medium text-[#0052FF] dark:text-blue-400">{formData.contact}</span> shortly.
              </p>
              <button
                onClick={resetForm}
                className="w-full py-3 rounded-full bg-[#0052FF] dark:bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            /* Clean 3-Field Form */
            <div>
              <div className="mb-6 pr-6">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Book a call
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Schedule your growth strategy session ({formData.plan}).
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0052FF] dark:focus:border-blue-500 focus:ring-1 focus:ring-[#0052FF] text-slate-900 dark:text-white text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email or WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="alex@company.com or +91 9876543210"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0052FF] dark:focus:border-blue-500 focus:ring-1 focus:ring-[#0052FF] text-slate-900 dark:text-white text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project / Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us briefly about your goals or website requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0052FF] dark:focus:border-blue-500 focus:ring-1 focus:ring-[#0052FF] text-slate-900 dark:text-white text-xs outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0052FF] dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 active:scale-[0.98] py-3.5 text-white font-semibold text-xs shadow-lg shadow-blue-600/25 transition-all disabled:opacity-70 mt-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Book Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
