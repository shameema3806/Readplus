"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Heart, Target, Star } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide every Indian expat child in Al Ain with uninterrupted, high-quality CBSE education regardless of school admission status.",
    variant: "teal" as const,
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Compassion, consistency, and commitment. We treat every child as our own — with patience, encouragement, and individual attention.",
    variant: "default" as const,
  },
  {
    icon: Star,
    title: "Our Vision",
    description:
      "To be the most trusted educational bridge for Indian families in the UAE, known for turning transition time into a learning advantage.",
    variant: "gold" as const,
  },
];

export function MissionSection() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          What Drives Us
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          Mission,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            Values &amp; Vision
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <GlassCard key={p.title} delay={i} variant={p.variant} className="p-7">
              <div className="w-11 h-11 rounded-xl mb-5
                bg-[rgba(14,126,128,0.08)] border border-[rgba(14,126,128,0.15)]
                flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#0E7E80]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
