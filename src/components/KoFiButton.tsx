import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function KoFiButton() {
  return (
    <motion.a
      href="https://ko-fi.com/omarnaru"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-40 px-5 py-3 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 rounded-full shadow-lg shadow-pink-600/30 flex items-center gap-2 transition-all"
    >
      <Heart className="w-5 h-5 fill-white" />
      <span className="hidden sm:inline">Support Me</span>
    </motion.a>
  );
}
