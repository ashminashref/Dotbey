"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      name: "Starter",
      subtitle: "For individuals dealing their own business",
      price: "INR 9999",
      period: "/Month",
      popular: false,
      buttonText: "Get started",
      features: [
        "Social Media Management",
        "10 Creative Posts per Month",
        "Basic Content Strategy",
        "Reels Construction",
        "Monthly Performance Report",
        "Basic Community Management",
      ],
    },
    {
      name: "Growth",
      subtitle: "For growing businesses ready to reach more people, generate leads, and achieve stronger returns.",
      price: "INR 24,999",
      period: "/Month",
      popular: true,
      buttonText: "Get started",
      features: [
        "Everything in Starter",
        "20 Premium Creative Posts",
        "Advanced Social Media Strategy",
        "Paid Advertising Management",
        "Content Creation & Accounting",
        "Lead Generation Campaigns",
        "Detailed Monthly Analytics",
        "Priority Support",
      ],
    },
    {
      name: "Scale",
      subtitle: "A complete digital marketing solution for ambitious brands ready to scale faster and compete at the highest level.",
      price: "Custom Pricing",
      period: "",
      popular: false,
      buttonText: "Call Now",
      features: [
        "Complete Digital Marketing Strategy",
        "Multi-Platform Campaign Management",
        "Advanced Performance Advertising",
        "Premium Content & Creative Production",
        "Conversion Optimization",
        "Dedicated Account Manager",
        "Advanced Analytics & Reporting",
        "Custom Strategy Sessions",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Screenshot 351 */}
        <div className="text-left sm:text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-slate-900">
            Simple <span className="font-accent italic font-normal text-slate-900">pricing</span>
          </h2>
        </div>

        {/* 3-Column Outer Container Frame matching Screenshot 351 EXACTLY */}
        <div className="max-w-6xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`relative bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[#0052FF] shadow-lg shadow-blue-500/10"
                    : "border border-slate-200/70"
                }`}
              >
                <div>
                  {/* POPULAR Label matching Screenshot 351 */}
                  {plan.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0052FF] block mb-2">
                      POPULAR
                    </span>
                  )}

                  {/* Title & Subtitle matching Screenshot 351 */}
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mb-8 min-h-[40px]">
                    {plan.subtitle}
                  </p>

                  {/* Price Display matching Screenshot 351 */}
                  <div className="mb-8 flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs font-normal text-slate-500 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Full-width Blue Button with Small White Square Icon matching Screenshot 351 */}
                  <button
                    onClick={() => onSelectPlan && onSelectPlan(plan.name)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0052FF] hover:bg-blue-700 active:scale-[0.98] py-3.5 px-4 text-xs font-semibold text-white transition-all shadow-md shadow-blue-600/20 mb-8"
                  >
                    <span className="w-2 h-2 bg-white rounded-xs inline-block" />
                    <span>{plan.buttonText}</span>
                  </button>

                  {/* Features Checklist matching Screenshot 351 */}
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-900 mb-4">
                      Includes
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-xs text-slate-600 font-normal">
                          <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
