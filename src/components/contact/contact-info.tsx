"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PHONE_NUMBERS, EMAIL, ADDRESS, MAPS_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { motion } from "framer-motion";

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20READ%20PLUS.`;

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <GlassCard className="p-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Contact Details
        </h2>
        <div className="space-y-5">

          {/* Phone numbers */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl shrink-0
              bg-[rgba(14,126,128,0.08)] border border-[rgba(14,126,128,0.15)]
              flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#0E7E80]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Phone</p>
              {PHONE_NUMBERS.map((num) => (
                <a
                  key={num}
                  href={`tel:${num.replace(/\s/g, "")}`}
                  className="block text-sm text-slate-600 hover:text-[#0E7E80] transition-colors"
                >
                  {num}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl shrink-0
              bg-[rgba(14,126,128,0.08)] border border-[rgba(14,126,128,0.15)]
              flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#0E7E80]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Email</p>
              <a href={`mailto:${EMAIL}`}
                className="text-sm text-slate-600 hover:text-[#0E7E80] transition-colors">
                {EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl shrink-0
              bg-[rgba(14,126,128,0.08)] border border-[rgba(14,126,128,0.15)]
              flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#0E7E80]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Location</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-[#0E7E80] transition-colors">
                {ADDRESS}
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl shrink-0
              bg-[rgba(14,126,128,0.08)] border border-[rgba(14,126,128,0.15)]
              flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#0E7E80]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Hours</p>
              <p className="text-sm text-slate-600">Mon–Sat: 8am – 7pm</p>
            </div>
          </motion.div>

        </div>
      </GlassCard>

      {/* WhatsApp CTA */}
      <GlassCard variant="teal" className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800 mb-0.5">
              Prefer WhatsApp?
            </p>
            <p className="text-xs text-slate-500">
              +971 56 768 6157 — reply within minutes.

            </p>
          </div>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2
            w-full py-3 rounded-xl font-semibold text-white text-sm
            bg-[#25D366] hover:bg-[#20c05a] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Chat on WhatsApp
        </a>
      </GlassCard>
    </div>
  );
}
