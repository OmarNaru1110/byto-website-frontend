import { motion } from "motion/react";
import { Smile, Zap, Gauge, MonitorSmartphone, Code } from "lucide-react";

export function WhyByto() {
  const reasons = [
    {
      icon: Smile,
      title: "User-Friendly",
      description: "A clean GUI for people who don't like terminals"
    },
    {
      icon: Zap,
      title: "Power of yt-dlp",
      description: "Full control without complexity"
    },
    {
      icon: Gauge,
      title: "Fast & Optimized",
      description: "Built with performance in mind"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl">Why Use Byto?</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            The perfect balance between simplicity and power
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-blue-600/50 transition-all text-center group"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-600/20 transition-colors">
                <reason.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}