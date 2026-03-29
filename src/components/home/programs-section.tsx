"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/glass-card";
import { BookOpen } from "lucide-react";

const grades = [
  { grade: "Grade 1", age: "Ages 6–7",  subjects: ["English","Mathematics","EVS","Hindi","GK"] },
  { grade: "Grade 2", age: "Ages 7–8",  subjects: ["English","Mathematics","EVS","Hindi","GK"] },
  { grade: "Grade 3", age: "Ages 8–9",  subjects: ["English","Mathematics","Science","Hindi","Social"] },
  { grade: "Grade 4", age: "Ages 9–10", subjects: ["English","Mathematics","Science","Hindi","Social"] },
  { grade: "Grade 5", age: "Ages 10–11",subjects: ["English","Mathematics","Science","Hindi","Social"] },
  { grade: "Grade 6", age: "Ages 11–12",subjects: ["English","Mathematics","Science","Hindi","Social","Computer"] },
];

export function ProgramsSection() {
  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          CBSE Curriculum
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          Programs for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            Every Grade
          </span>
        </h2>
        <p className="text-slate-500 mt-4 max-w-xl mx-auto">
          Structured CBSE-aligned learning for each level, taught in small
          groups with individual attention.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grades.map((item, i) => (
          <GlassCard key={item.grade} delay={i} hover className="p-6 group cursor-default">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl
                bg-[rgba(14,126,128,0.08)] border border-[rgba(14,126,128,0.15)]
                flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#0E7E80]" />
              </div>
              <span
                className="w-2 h-2 rounded-full bg-[#D4991A] mt-1"
                style={{ boxShadow: "0 0 6px rgba(212,153,26,0.50)" }}
              />
            </div>

            <h3 className="text-xl font-semibold text-slate-800">{item.grade}</h3>
            <p className="text-sm text-slate-400 mb-4">{item.age}</p>

            <div className="flex flex-wrap gap-1.5">
              {item.subjects.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 rounded-lg text-xs
                    bg-slate-100 border border-slate-200
                    text-slate-500 group-hover:border-[rgba(14,126,128,0.25)]
                    group-hover:bg-[rgba(14,126,128,0.05)]
                    transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <p className="text-slate-500 text-sm">
          Not sure which grade fits?{" "}
          <a href="/contact" className="text-[#0E7E80] hover:underline font-medium">
            Talk to us
          </a>{" "}
          and we&apos;ll guide you.
        </p>
      </motion.div>
    </section>
  );
}
