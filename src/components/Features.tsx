import { motion } from "motion/react";
import { Download, List, Settings, BarChart3, FileText, PlayCircle, FolderOpen, Palette } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Download,
      title: "Parallel Downloads",
      description: "Control how many videos download at the same time for optimal speed.",
      color: "blue"
    },
    {
      icon: List,
      title: "Multiple URLs at Once",
      description: "Add several media links and start all together with one click.",
      color: "green"
    },
    {
      icon: Settings,
      title: "Quality Selection",
      description: "Choose preferred quality with ease from an intuitive dropdown.",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Real-Time Progress Tracking",
      description: "See speed, file size, logs, and status indicators updated in real-time.",
      color: "orange"
    },
    {
      icon: PlayCircle,
      title: "Pause / Resume / Stop",
      description: "Control individual tasks or stop everything with precision controls.",
      color: "green"
    },
    {
      icon: FolderOpen,
      title: "Custom Download Path",
      description: "Choose exactly where files go with a convenient file browser.",
      color: "blue"
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-600/10 border-blue-600/20 group-hover:border-blue-600/50",
    green: "bg-green-600/10 border-green-600/20 group-hover:border-green-600/50",
    orange: "bg-orange-600/10 border-orange-600/20 group-hover:border-orange-600/50",
    multicolor: "bg-gradient-to-br from-blue-600/10 via-green-600/10 to-orange-600/10 border-blue-600/20 group-hover:border-blue-600/50"
  };

  const iconColorMap: Record<string, string> = {
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
    multicolor: "text-blue-500"
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl">Core Features</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Everything you need for efficient media downloads in one beautiful package
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`p-6 bg-[#141414] border rounded-xl transition-all group ${colorMap[feature.color]}`}
            >
              <div className="w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className={`w-6 h-6 ${iconColorMap[feature.color]}`} />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}