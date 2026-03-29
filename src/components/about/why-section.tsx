"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "CBSE curriculum perfectly aligned with Indian school syllabus",
  "Small batches — maximum 15 students — for focused learning",
  "Qualified and experienced CBSE-trained teachers",
  "Flexible morning and evening batch timings",
  "Regular parent updates via WhatsApp",
  "Affordable fees with no hidden charges",
  "Students seamlessly integrate into schools without gaps",
  "Safe, structured, and encouraging classroom environment",
  "Located conveniently in Al Ain for expat families",
  "Immediate enrollment — no waiting period",
];

export function WhySection() {
  return (
    <section className="px-4 md:px-8 py-20 bg-slate-50 max-w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
            The READ PLUS Difference
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 tracking-tight">
            Why Families{" "}
            <span className="text-[#0E7E80]">Choose Us</span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            We built READ PLUS specifically for the Indian expat community in Al Ain.
            Every decision — curriculum, batch size, fees, scheduling — was made with
            your family&apos;s situation in mind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-2.5"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white
                border border-slate-200
                hover:border-[rgba(14,126,128,0.25)] hover:bg-[rgba(14,126,128,0.02)]
                transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-[rgba(14,126,128,0.10)]
                flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#0E7E80]" />
              </div>
              <p className="text-sm text-slate-600">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
