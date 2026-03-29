"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function CtaSection() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20enroll%20my%20child%20at%20READ%20PLUS.`;

  return (
    <section className="px-4 md:px-8 py-24 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-16
          bg-white border border-slate-200"
        style={{ boxShadow: "0 8px 40px rgba(14,126,128,0.10)" }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold
          bg-[rgba(212,153,26,0.08)] border border-[rgba(212,153,26,0.20)]
          text-[#D4991A] mb-6">
          Limited Seats per Batch
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
          Start Learning{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            This Week
          </span>
        </h2>

        <p className="text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
          Don&apos;t let school admission delays slow your child down. Enroll at READ PLUS
          and keep their education on track from day one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                font-semibold text-white text-base
                bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]"
              style={{ boxShadow: "var(--shadow-teal)" }}
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                font-medium text-white text-base
                bg-[#25D366] hover:bg-[#20c05a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
