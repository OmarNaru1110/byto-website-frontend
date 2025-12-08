import { motion } from "motion/react";
import { Download as DownloadIcon, ExternalLink, AlertCircle } from "lucide-react";
import bytoLogo from "figma:asset/e1c6c4d1df3cefc4435d7cc603c42e22f058f10f.png";

export function Download() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <img src={bytoLogo} alt="Byto" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl mb-2">Download Byto</h1>
              <p className="text-gray-400">Get started with Byto in minutes</p>
            </div>
          </div>

          {/* Download Button */}
          <motion.a
            href="https://github.com/OmarNaru1110/byto/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all mb-12 group"
          >
            <DownloadIcon className="w-6 h-6" />
            <span className="text-lg">Download Latest Release</span>
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Installation Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Installation Section */}
            <div className="p-8 bg-[#141414] border border-[#262626] rounded-2xl">
              <h2 className="text-3xl mb-4">Installation</h2>
              <p className="text-gray-400 mb-6">
                Download the latest release from the{" "}
                <a
                  href="https://github.com/OmarNaru1110/byto/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline"
                >
                  Releases
                </a>{" "}
                page.
              </p>

              {/* Windows Instructions */}
              <div className="space-y-4">
                <h3 className="text-xl flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                  </span>
                  Windows
                </h3>

                <ol className="space-y-3 ml-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600/10 rounded-full flex items-center justify-center text-sm text-blue-500">1</span>
                    <span className="text-gray-400">
                      Download{" "}
                      <code className="px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-blue-400">
                        byto-amd64-installer.exe
                      </code>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600/10 rounded-full flex items-center justify-center text-sm text-blue-500">2</span>
                    <span className="text-gray-400">
                      You may see a SmartScreen warning (the app is not code-signed). Click{" "}
                      <span className="text-white">&quot;More info&quot;</span> →{" "}
                      <span className="text-white">&quot;Run anyway&quot;</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600/10 rounded-full flex items-center justify-center text-sm text-blue-500">3</span>
                    <span className="text-gray-400">Follow the installation wizard</span>
                  </li>
                </ol>

                <div className="flex gap-3 p-4 bg-orange-600/10 border border-orange-600/20 rounded-lg mt-6">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    <span className="text-orange-400">Note:</span> When checking for updates, run byto as administrator
                  </p>
                </div>
              </div>
            </div>

            {/* Building from Source */}
            <div className="p-8 bg-[#141414] border border-[#262626] rounded-2xl">
              <h2 className="text-3xl mb-4">Building from Source</h2>
              <p className="text-gray-400">
                If you are a developer and want to build Byto yourself, please check our{" "}
                <a
                  href="https://github.com/OmarNaru1110/byto/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline inline-flex items-center gap-1"
                >
                  Contribution Guide
                  <ExternalLink className="w-4 h-4" />
                </a>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}