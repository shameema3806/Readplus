"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function WhatsAppFab() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20READ%20PLUS%20programs.`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
        flex items-center justify-center
        bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.40)]
        hover:shadow-[0_4px_32px_rgba(37,211,102,0.60)] transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.003 3C9.375 3 4 8.373 4 15c0 2.385.67 4.61 1.832 6.504L4 29l7.695-1.807A11.938 11.938 0 0016.003 28C22.63 28 28 22.627 28 16S22.63 3 16.003 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 01-5.035-1.355l-.36-.216-3.73.877.906-3.61-.24-.378A9.951 9.951 0 016 16c0-5.523 4.477-10 10.003-10zm-3.43 5.5c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.1 3.2 5.1 4.375 2.999 1.175 2.999.8 3.549.75.55-.05 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35-.3-.15-1.774-.875-2.049-.975-.275-.1-.474-.15-.674.15-.2.3-.774.975-.949 1.175-.175.2-.35.225-.65.075-.3-.15-1.264-.466-2.408-1.484-.89-.79-1.49-1.767-1.664-2.067-.175-.3-.018-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.626-.924-2.226-.242-.586-.488-.508-.674-.516l-.575-.01z" />
      </svg>
    </motion.a>
  );
}
