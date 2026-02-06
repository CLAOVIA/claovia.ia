import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claovia - Transformez le ressenti collaborateur en levier de performance",
  description: "Claovia est le copilote IA qui permet aux managers opérationnels de passer du constat à l'action. Collecte de REX, analyse des non-dits et génération de kits de réponse : tout est prêt en 2 minutes pour fidéliser vos talents.",
  keywords: ["RH", "feedback", "manager", "collaborateur", "IA", "REX", "copilote IA", "fidélisation talents"],
  openGraph: {
    title: "Claovia - Transformez le ressenti collaborateur en levier de performance",
    description: "Claovia est le copilote IA qui permet aux managers opérationnels de passer du constat à l'action. Collecte de REX, analyse des non-dits et génération de kits de réponse.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-5S4L9MDR" />
      <body
        className={`${inter.variable} bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
