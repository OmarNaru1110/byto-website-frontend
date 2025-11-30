import { Download, Github, Twitter } from "lucide-react";
import bytoLogo from "figma:asset/e1c6c4d1df3cefc4435d7cc603c42e22f058f10f.png";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#070707] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={bytoLogo} alt="Byto" className="w-6 h-6" />
              <span className="tracking-tight">byto</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              A lightweight GUI for yt-dlp. Download media effortlessly with a smart, beautiful desktop experience.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
            
              <li>
                <a href="#notify" className="text-gray-400 hover:text-white transition-colors">
                  Get Notified
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="https://github.com/OmarNaru1110" 
                className="w-10 h-10 bg-[#141414] border border-[#262626] rounded-lg flex items-center justify-center hover:border-blue-600/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/OmarNaru1110" 
                className="w-10 h-10 bg-[#141414] border border-[#262626] rounded-lg flex items-center justify-center hover:border-blue-600/50 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Byto. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}