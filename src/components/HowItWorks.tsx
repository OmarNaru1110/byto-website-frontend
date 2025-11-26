import { motion } from "motion/react";
import { Link2, Settings, Play, BarChart3 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      title: "Paste URLs",
      description: "Add one or many video links from supported platforms",
      color: "blue"
    },
    {
      icon: Settings,
      title: "Choose Settings",
      description: "Quality, path, and download limits configured easily",
      color: "green"
    },
    {
      icon: Play,
      title: "Start",
      description: "Byto builds accurate yt-dlp commands for you automatically",
      color: "orange"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Real-time logs and color-coded statuses keep you informed",
      color: "blue"
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500"
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl">How Byto Works</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Four simple steps to download any video with ease
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-[#262626] to-transparent" />
              )}
              
              <div className="relative p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-blue-600/50 transition-all">
                <div className="w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4">
                  <step.icon className={`w-6 h-6 ${colorMap[step.color]}`} />
                </div>
                
                <div className="absolute top-6 right-6 w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center">
                  <span className="text-sm text-blue-500">{index + 1}</span>
                </div>
                
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
