import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { WhatsAppFab } from "@/components/shared/whatsapp-fab";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "READ PLUS Training Institute Al Ain | CBSE School Support",
    template: "%s | READ PLUS Al Ain",
  },
  description:
    "Structured CBSE-aligned classroom learning in Al Ain for Indian expat children Grades 1–6. Flexible enrollment for students awaiting school admission.",
  metadataBase: new URL("https://readplus.ae"),
  openGraph: {
    siteName: "READ PLUS Training Institute",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
