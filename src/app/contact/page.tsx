import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with READ PLUS Training Institute Al Ain. WhatsApp, phone, email, or fill our enquiry form.",
};

export default function ContactPage() {
  return (
    <section className="px-4 md:px-8 pt-32 pb-24 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          Get In Touch
        </span>
        <h1 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          We&apos;d Love to Hear{" "}
          <span className="text-[#0E7E80]">From You</span>
        </h1>
        <p className="text-slate-500 mt-4 max-w-md mx-auto">
          Have a question about enrollment, fees, or schedule?
          Reach out and we&apos;ll respond promptly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
