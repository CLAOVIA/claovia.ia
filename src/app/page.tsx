import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQ } from "@/components/landing/FAQ";
import { VisionSection } from "@/components/landing/VisionSection";
import { StartSection } from "@/components/landing/StartSection";
import { FeedbackSection } from "@/components/landing/FeedbackSection";
import { Footer } from "@/components/layout/Footer";

const HeroPremium = dynamic(
  () => import("@/components/landing/HeroPremium").then((m) => m.HeroPremium)
);

const MetricsSection = dynamic(
  () =>
    import("@/components/landing/MetricsSection").then(
      (m) => m.MetricsSection
    )
);

const ReportShowcase = dynamic(
  () =>
    import("@/components/landing/ReportShowcase").then(
      (m) => m.ReportShowcase
    )
);

const DemoSection = dynamic(
  () => import("@/components/landing/DemoSection").then((m) => m.DemoSection)
);

export default function Home() {
  return (
    <main className="min-h-screen bg-sage-50">
      <Navbar />
      <HeroPremium />
      <MetricsSection />
      <HowItWorks />
      <ReportShowcase />
      <DemoSection />
      <VisionSection />
      <FAQ />
      <StartSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}
