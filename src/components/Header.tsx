import { Download } from "lucide-react";
import { motion } from "motion/react";
import bytoLogo from "figma:asset/e1c6c4d1df3cefc4435d7cc603c42e22f058f10f.png";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          <div className="flex items-center gap-2">
            <img src={bytoLogo} alt="Byto" className="w-8 h-8" />
            <span className="tracking-tight">byto</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("notify")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Notification
            </button>

            <button
              className="px-4 py-2 bg-gray-800 text-gray-500 rounded-lg cursor-not-allowed"
              disabled
            >
              Download (Soon)
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("notify")}
            className="md:hidden px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Notify Me
          </button>
        </div>
      </div>
    </motion.header>
  );
}