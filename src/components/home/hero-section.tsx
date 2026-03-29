"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center
      px-4 pt-24 pb-16 overflow-hidden bg-white">

      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full
          bg-[rgba(14,126,128,0.05)] blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full
          bg-[rgba(30,50,114,0.05)] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[300px] h-[300px] rounded-full
          bg-[rgba(14,126,128,0.04)] blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
            bg-[rgba(14,126,128,0.07)] border border-[rgba(14,126,128,0.20)]
            text-[#0E7E80] text-sm font-medium"
        >
          <Star className="w-3.5 h-3.5 fill-[#D4991A] text-[#D4991A]"
            style={{ filter: "drop-shadow(0 0 4px rgba(212,153,26,0.50))" }} />
          CBSE-Aligned School Support · Al Ain, UAE
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-slate-900"
        >
          Your Child&apos;s Learning{" "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text
            bg-gradient-to-r from-[#0E7E80] via-[#1A9A9C] to-[#0E7E80]">
            Never Stops
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Structured, face-to-face CBSE classroom learning for Indian expat
          children{" "}
          <strong className="text-slate-800 font-semibold">Grades 1–6</strong>{" "}
          while awaiting school admission in Al Ain.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
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
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                font-medium text-slate-600 text-base
                border border-slate-300
                hover:border-[#0E7E80] hover:text-[#0E7E80]
                transition-all"
            >
              About the Program
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: "150+", label: "Students Enrolled" },
            { value: "6",    label: "Grade Levels" },
            { value: "2+",   label: "Years of Excellence" },
            { value: "100%", label: "CBSE Aligned" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#0E7E80]">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
