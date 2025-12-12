import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Byto free?",
      answer: "Yes, the app will be available for free when it launches."
    },
    {
      question: "What sites does Byto support?",
      answer: "Byto supports all platforms that yt-dlp supports, which includes YouTube, Vimeo, Twitch, and hundreds of other sites."
    },
    {
      question: "Can I customize download settings?",
      answer: "Absolutely! Byto gives you full control over quality, format, download path, parallel downloads, and more."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Byto
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors text-left"
              >
                <h3>{faq.question}</h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
