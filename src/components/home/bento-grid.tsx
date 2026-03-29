"use client";

import { GlassCard } from "@/components/shared/glass-card";
import {
  Users, BookOpen, Clock, MapPin,
  Award, MessageSquare, Sparkles
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "CBSE-Aligned Curriculum",
    description: "Full NCERT syllabus coverage across all subjects — exactly what schools expect.",
    span: "md:col-span-2",
    variant: "teal" as const,
  },
  {
    icon: Users,
    title: "Small Batch Classes",
    description: "Maximum 15 students per batch for focused, personal attention.",
    span: "",
    variant: "default" as const,
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Morning and evening batches to fit around your family's routine.",
    span: "",
    variant: "default" as const,
  },
  {
    icon: MapPin,
    title: "Based in Al Ain",
    description: "Conveniently located for Indian expat families across Al Ain.",
    span: "",
    variant: "default" as const,
  },
  {
    icon: Award,
    title: "Experienced Teachers",
    description: "Qualified CBSE educators with years of classroom experience.",
    span: "md:col-span-2",
    variant: "navy" as const,
  },
  {
    icon: MessageSquare,
    title: "Parent Updates",
    description: "Regular progress reports and WhatsApp updates so you stay informed.",
    span: "",
    variant: "default" as const,
  },
  {
    icon: Sparkles,
    title: "Smooth School Transition",
    description: "Students join schools without any learning gap — ready from day one.",
    span: "",
    variant: "gold" as const,
  },
];

export function BentoGrid() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          Why READ PLUS
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          Everything Your Child{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            Needs to Thrive
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <GlassCard
              key={f.title}
              delay={i}
              hover
              variant={f.variant}
              className={`p-6 ${f.span}`}
            >
              <div className="w-10 h-10 rounded-xl mb-4
                bg-[rgba(14,126,128,0.10)] border border-[rgba(14,126,128,0.15)]
                flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#0E7E80]" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {f.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
