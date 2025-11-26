import { motion } from "motion/react";
import { Terminal, Sparkles, Zap } from "lucide-react";

export function IntroSection() {
  const features = [
    {
      icon: Terminal,
      title: "No Terminal Required",
      description: "Beautiful GUI interface"
    },
    {
      icon: Sparkles,
      title: "Intuitive & Clean",
      description: "Modern dark interface"
    },
    {
      icon: Zap,
      title: "Full yt-dlp Power",
      description: "All features, simplified"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl">What is Byto?</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Byto simplifies video downloads. No terminal, no complexity—just a clean, intuitive interface on top of yt-dlp. 
            Configure parallel downloads, manage multiple URLs, track progress in real-time, and control every task with precision.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-blue-600/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
