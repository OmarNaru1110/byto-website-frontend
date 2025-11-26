import { motion } from "motion/react";
import { Bell, Mail } from "lucide-react";
import { useState } from "react";
import notificationIcon from "figma:asset/e1c6c4d1df3cefc4435d7cc603c42e22f058f10f.png";

export function NotificationService() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="notify" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#262626] rounded-2xl overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Icon and text */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Bell className="w-8 h-8 text-blue-500" />
                </div>
                
                <h2 className="mb-4 text-3xl sm:text-4xl">
                  Want to be notified when Byto is released?
                </h2>
                <p className="text-gray-400 mb-6">
                  Join our early list and get notified instantly when Byto launches. 
                  <span className="block mt-2 text-sm text-gray-500">No spam. You receive a single message when the app is ready.</span>
                </p>
              </div>
              
              {/* Right side - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-[#0a0a0a] border border-[#262626] rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Bell className="w-5 h-5" />
                        Notify Me
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
