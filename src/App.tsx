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
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "download" ? (
        <Download />
      ) : (
        <>
          <Hero />
          <IntroSection />
          <Features />
          <HowItWorks />
          <WhyByto />
          <FAQ />
        </>
      )}
      <KoFiButton />
      <Footer />
    </div>
  );
}