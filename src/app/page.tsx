import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import {
  CTASection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  ProblemSection,
  SolutionSection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-b from-emerald-50/70 via-white to-white text-zinc-900 dark:from-emerald-950/20 dark:via-zinc-950 dark:to-zinc-950 dark:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
