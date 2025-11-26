import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { Features } from "./components/Features";
import { Screenshots } from "./components/Screenshots";
import { NotificationService } from "./components/NotificationService";
import { HowItWorks } from "./components/HowItWorks";
import { WhyByto } from "./components/WhyByto";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <IntroSection />
      <Features />
      <NotificationService />
      <HowItWorks />
      <WhyByto />
      <FAQ />
      <Footer />
    </div>
  );
}
