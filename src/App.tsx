import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { Features } from "./components/Features";
import { Screenshots } from "./components/Screenshots";
import { HowItWorks } from "./components/HowItWorks";
import { WhyByto } from "./components/WhyByto";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Download } from "./components/Download";
import { KoFiButton } from "./components/KoFiButton";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Routes>
        <Route path="/download" element={<Download />} />
        <Route path="/" element={
          <>
            <Hero />
            <IntroSection />
            <Features />
            <HowItWorks />
            <WhyByto />
            <FAQ />
          </>
        } />
      </Routes>
      <KoFiButton />
      <Footer />
    </div>
  );
}