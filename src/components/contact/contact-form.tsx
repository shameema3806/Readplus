"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/glass-card";
import { submitContact } from "@/actions/contact";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  phone:   z.string().min(8, "Valid phone number required"),
  email:   z.string().email("Valid email address required"),
  grade:   z.string().min(1, "Please select a grade"),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const inputClass = `w-full px-4 py-3 rounded-xl text-sm text-slate-800
  bg-white border border-slate-300
  placeholder:text-slate-400
  focus:outline-none focus:border-[#0E7E80] focus:ring-2 focus:ring-[rgba(14,126,128,0.10)]
  transition-all duration-200`;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await submitContact(data);
    setSent(true);
  }

  if (sent) {
    return (
      <GlassCard variant="teal" className="p-8 flex flex-col
        items-center justify-center text-center gap-4 min-h-[460px]">
        <CheckCircle className="w-14 h-14 text-[#0E7E80]" />
        <h3 className="text-xl font-semibold text-slate-800">Message Sent!</h3>
        <p className="text-slate-500 leading-relaxed">
          We&apos;ll get back to you within 24 hours.<br />
          Or WhatsApp us for an instant reply.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-8">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Send an Enquiry
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input {...register("name")} placeholder="Your name" className={inputClass} />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input {...register("phone")} placeholder="WhatsApp / phone number" className={inputClass} />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input {...register("email")} type="email" placeholder="Email address" className={inputClass} />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <select {...register("grade")} className={inputClass}>
            <option value="">Child&apos;s grade</option>
            {[1, 2, 3, 4, 5, 6].map((g) => (
              <option key={g} value={`Grade ${g}`}>Grade {g}</option>
            ))}
          </select>
          {errors.grade && (
            <p className="text-red-500 text-xs mt-1">{errors.grade.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Tell us about your child (optional)"
            rows={3}
            className={inputClass + " resize-none"}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2
            py-3.5 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]
            disabled:opacity-60 transition-all"
          style={{ boxShadow: "var(--shadow-teal)" }}
        >
          {isSubmitting ? "Sending…" : "Send Enquiry"}
          <Send className="w-4 h-4" />
        </motion.button>
      </form>
    </GlassCard>
  );
}
