"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  variant?: "default" | "teal" | "gold" | "navy";
}

const variantStyles = {
  default: "bg-white border-slate-200",
  teal:    "bg-[rgba(14,126,128,0.04)] border-[rgba(14,126,128,0.20)]",
  gold:    "bg-[rgba(212,153,26,0.04)] border-[rgba(212,153,26,0.20)]",
  navy:    "bg-[rgba(30,50,114,0.04)] border-[rgba(30,50,114,0.15)]",
};

export function GlassCard({
  children,
  className,
  delay = 0,
  hover = false,
  variant = "default",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.08 }}
      whileHover={hover ? { y: -3, scale: 1.005 } : undefined}
      className={cn(
        "rounded-2xl border",
        "transition-all duration-300",
        variantStyles[variant],
        hover && "cursor-pointer hover:border-[rgba(14,126,128,0.30)] hover:shadow-[0_8px_32px_rgba(14,126,128,0.10)]",
        className
      )}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </motion.div>
  );
}
