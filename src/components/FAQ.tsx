"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Dotbey provide?",
      answer: "Dotbey is a 360-degree digital marketing and creative agency. We provide Next.js Web Development, Video Production (4K shoots & brand commercials), Studio Photography, Video Editing (Reels, TikTok & Motion Graphics), Graphic & Poster Design, Performance Meta Ads Management, Technical SEO, and full Brand Strategy.",
    },
    {
      question: "How fast can Dotbey launch our digital campaign or website?",
      answer: "For web development projects, our typical turnaround time for a custom high-performance landing page is 7–14 days. For video production and Meta Ads campaigns, launch timelines range from 5–10 business days after strategy approval.",
    },
    {
      question: "How does the pricing work for Starter, Growth, and Scale plans?",
      answer: "Our Starter plan (₹9,999/month) is ideal for bootstrapped founders and local brands starting out. The Growth plan (₹24,999/month) is our most popular package for scaling businesses needing multi-channel ad management & video shoots. The Scale plan is fully customized based on enterprise scope.",
    },
    {
      question: "Do you guarantee ROI on Meta Ads and marketing campaigns?",
      answer: "We focus on bottom-line revenue metrics (ROAS, cost-per-lead, and conversion rate). Our strategies are backed by data and continuous A/B testing to ensure your ad spend generates maximum returns.",
    },
    {
      question: "Will I get dedicated support during our contract?",
      answer: "Yes! Every client is assigned a dedicated Account Strategist. Growth and Scale tier clients also get direct 24/7 Slack / WhatsApp channel access for instant communication.",
    },
    {
      question: "How do we get started with Dotbey?",
      answer: "Simply click 'Book a Call' anywhere on this website to select your preferred date, select the services you need, and submit your contact details. Our strategy team will reach out within 2 hours with a custom proposal.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Frequently asked <span className="font-accent font-normal italic">questions</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-medium">
            Everything you need to know about working with Dotbey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-600 bg-blue-50/30 shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-slate-900 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-normal text-slate-600 leading-relaxed border-t border-blue-100/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
