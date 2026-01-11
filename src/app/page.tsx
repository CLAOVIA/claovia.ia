import { Navbar } from "@/components/layout/Navbar";
import { HeroPremium } from "@/components/landing/HeroPremium";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DemoSection } from "@/components/landing/DemoSection";
import { FAQ } from "@/components/landing/FAQ";
import { VisionSection } from "@/components/landing/VisionSection";
import { StartSection } from "@/components/landing/StartSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sage-50">
      <Navbar />
      <HeroPremium />
      <MetricsSection />
      <HowItWorks />
      <DemoSection />
      <VisionSection />
      <FAQ />
      <StartSection />
      <Footer />
    </main>
  );
}
