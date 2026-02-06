import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body
        className={`${inter.variable} bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden`}
      >
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5S4L9MDR');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5S4L9MDR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
