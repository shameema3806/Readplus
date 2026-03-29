"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { GraduationCap } from "lucide-react";

const team = [
  {
    name: "Meena Krishnan",
    role: "Founder & Lead Teacher",
    subjects: "English, EVS, General Knowledge",
    exp: "12 years CBSE experience",
    initial: "M",
  },
  {
    name: "Suresh Pillai",
    role: "Mathematics Teacher",
    subjects: "Mathematics, Science",
    exp: "9 years CBSE experience",
    initial: "S",
  },
  {
    name: "Divya Nambiar",
    role: "Language Teacher",
    subjects: "Hindi, Malayalam, Social Studies",
    exp: "7 years CBSE experience",
    initial: "D",
  },
];

export function TeamSection() {
  return (
    <section className="px-4 md:px-8 py-20 pb-28 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          The Educators
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          Meet Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            Teaching Team
          </span>
        </h2>
        <p className="text-slate-500 mt-4 max-w-lg mx-auto">
          Qualified, passionate CBSE educators dedicated to your child&apos;s progress.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {team.map((member, i) => (
          <GlassCard key={member.name} delay={i} hover className="p-7 text-center">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-5
              bg-gradient-to-br from-[#0E7E80] to-[#1E3272]
              flex items-center justify-center text-white text-xl font-bold"
              style={{ boxShadow: "var(--shadow-teal)" }}>
              {member.initial}
            </div>

            <h3 className="text-base font-semibold text-slate-800 mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-[#0E7E80] mb-3">{member.role}</p>

            <div className="flex items-center justify-center gap-1.5 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-[#D4991A]" />
              <span className="text-xs text-slate-500">{member.exp}</span>
            </div>

            <p className="text-xs text-slate-400">{member.subjects}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
