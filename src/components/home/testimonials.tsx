"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My daughter joined READ PLUS while we were waiting for her CBSE school seat. Within two months, she was ahead of her classmates when she finally joined school. The teachers are genuinely caring.",
    name: "Priya Nair",
    role: "Parent, Grade 3 student",
    location: "Al Ain",
  },
  {
    quote:
      "We relocated from Kerala and were worried about the 4-month gap before school started. READ PLUS kept my son's learning on track. He never missed a beat and settled into school confidently.",
    name: "Rajesh Menon",
    role: "Parent, Grade 5 student",
    location: "Al Ain",
  },
  {
    quote:
      "The small class sizes make a huge difference. My son gets the attention he needs and the CBSE curriculum is exactly what his school uses. Affordable and absolutely worth it.",
    name: "Anjali Sharma",
    role: "Parent, Grade 2 student",
    location: "Al Ain",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          What Parents Say
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            Indian Families
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <GlassCard key={t.name} delay={i} className="p-7 flex flex-col gap-5">
            <Quote className="w-6 h-6 text-[#0E7E80] opacity-40" />
            <p className="text-sm text-slate-500 leading-relaxed flex-1 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0E7E80] to-[#1E3272]
                flex items-center justify-center text-white text-sm font-bold shrink-0">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role} · {t.location}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
