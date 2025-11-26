import { Bell } from "lucide-react";
import { motion } from "motion/react";
import { Download, Play } from "lucide-react";
import appScreenshot from "figma:asset/cd4b7f79c8416edc3f395905d588548621da7cf0.png";

export function Hero() {
  const scrollToNotify = () => {
    const element = document.getElementById("notify");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 text-5xl sm:text-6xl lg:text-7xl"
            >
              Download videos, audios and playlists{" "}
              <span className="text-blue-500">effortlessly</span> with a smart, beautiful desktop experience
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8 text-gray-400 text-lg"
            >
              Byto is a lightweight GUI for yt-dlp, combining powerful capabilities with an elegant dark interface.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={scrollToNotify}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all flex items-center gap-2 hover:scale-105"
              >
                <Bell className="w-5 h-5" />
                Notify Me
              </button>
              <button disabled className="px-6 py-3 bg-[#141414] border border-[#262626] rounded-lg flex items-center gap-2 cursor-not-allowed opacity-50">
                <Play className="w-5 h-5" />
                Watch Demo (Soon)
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-3xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-2xl"
            >
              <img 
                src={appScreenshot} 
                alt="Byto Desktop App Interface" 
                className="w-full h-auto"
              />
              {/* Animated glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}