"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";
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
    email: "",
    phone: "",
    plan: selectedPlan || "Growth Plan",
    selectedServices: [] as string[],
    date: new Date().toISOString().split("T")[0],
    time: "10:00 AM",
    notes: "",
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const availableServices = [
    "Web Engineering",
    "Video Production",
    "Video Editing",
    "Studio Photography",
    "Graphic & Poster Design",
    "Meta Ads",
    "SEO Optimization",
    "Brand Strategy",
  ];

  const timeSlots = ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

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
        particleCount: 100,
        spread: 70,
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Apple Blur Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetForm}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100 overflow-hidden my-auto text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={resetForm}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            /* Success State */
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Strategy Call Booked
              </h3>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
                Thank you <span className="font-semibold text-slate-800">{formData.name}</span>. Our growth team will connect with you on{" "}
                <span className="font-medium text-[#0052FF]">{formData.date} at {formData.time}</span>.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-full bg-[#0052FF] text-white font-medium text-sm hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form View */
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Book a call
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Discuss your brand goals & package: <span className="font-medium text-[#0052FF]">{formData.plan}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] text-slate-900 text-xs outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] text-slate-900 text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] text-slate-900 text-xs outline-none transition-all"
                  />
                </div>

                {/* Services Tags */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-2">
                    Services Needed
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {availableServices.map((service) => {
                      const selected = formData.selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${
                            selected
                              ? "bg-[#0052FF] text-white border-[#0052FF]"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0052FF]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#0052FF] text-slate-900 text-xs outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0052FF]" />
                      <span>Time Slot</span>
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#0052FF] text-slate-900 text-xs outline-none bg-white"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0052FF] hover:bg-blue-700 active:scale-[0.98] py-3 text-white font-medium text-sm transition-all duration-200 disabled:opacity-70 mt-2"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Confirm Booking</span>
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
