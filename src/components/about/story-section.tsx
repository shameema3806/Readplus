"use client";

import { motion } from "framer-motion";
import { LogoStacked } from "@/components/shared/logo";

export function StorySection() {
  return (
    <section className="px-4 md:px-8 pt-32 pb-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
            Our Story
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-3 mb-6 tracking-tight leading-tight">
            Built for Families<br />
            <span className="text-[#0E7E80]">Like Yours</span>
          </h1>
          <p className="text-slate-500 leading-relaxed mb-4">
            READ PLUS Training Institute was founded in Al Ain with one clear mission — to
            ensure that no Indian child&apos;s education is put on hold because of school
            admission delays, visa processing, or financial constraints.
          </p>
          <p className="text-slate-500 leading-relaxed">
            We understood the anxiety Indian expat families face when relocating to the UAE.
            The gap between arriving and securing a school seat can stretch months. READ PLUS
            bridges that gap with structured, CBSE-aligned, face-to-face classroom learning.
          </p>
        </motion.div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden aspect-[4/3]
            bg-gradient-to-br from-[rgba(14,126,128,0.06)] to-[rgba(30,50,114,0.06)]
            border border-slate-200 flex items-center justify-center"
          style={{ boxShadow: "0 8px 32px rgba(14,126,128,0.08)" }}
        >
          <div className="p-8 flex flex-col items-center justify-center gap-3">
            <LogoStacked />
            <p className="text-slate-400 text-xs tracking-wide">Al Ain, UAE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
