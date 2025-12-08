import { Download } from "lucide-react";
import { motion } from "motion/react";
import bytoLogo from "figma:asset/e1c6c4d1df3cefc4435d7cc603c42e22f058f10f.png";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const scrollToSection = (id: string) => {
    if (currentPage !== "home") {
      window.location.hash = "";
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateToDownload = () => {
    window.location.hash = "download";
    setCurrentPage("download");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    window.location.hash = "";
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#262626]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={navigateToHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={bytoLogo} alt="Byto" className="w-8 h-8" />
            <span className="tracking-tight">byto</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={navigateToDownload}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Download
            </button>
          </nav>
          
          <button 
            onClick={navigateToDownload}
            className="md:hidden px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Download
          </button>
        </div>
      </div>
    </motion.header>
  );
}