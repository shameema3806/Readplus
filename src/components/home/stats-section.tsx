"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, { damping: 30, stiffness: 100 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) count.set(target);
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Students Enrolled",   sub: "and growing" },
  { value: 6,   suffix: "",  label: "Grade Levels",        sub: "Grades 1 to 6" },
  { value: 2,   suffix: "+", label: "Years of Excellence", sub: "serving Al Ain" },
  { value: 100, suffix: "%", label: "CBSE Aligned",        sub: "NCERT syllabus" },
];

export function StatsSection() {
  return (
    <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center p-6 rounded-2xl
              bg-[rgba(14,126,128,0.04)] border border-[rgba(14,126,128,0.12)]"
          >
            <p className="text-3xl md:text-4xl font-bold text-[#0E7E80] mb-1">
              <Counter target={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm font-medium text-slate-700">{s.label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
