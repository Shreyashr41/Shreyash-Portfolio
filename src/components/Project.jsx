import { motion } from "framer-motion"
import { FiGithub, FiExternalLink, FiShield } from "react-icons/fi"
import { SiFastapi, SiPython, SiReact, SiPostgresql } from "react-icons/si"

export default function Project() {
  return (
    <section id="projects" className="w-full py-24 px-4 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Projects</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
            Featured Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white neo-border shadow-neo overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-neo-coral-light border-2 border-neo-coral/30 px-3 py-1.5 mb-5 w-fit">
                <FiShield size={12} className="text-neo-coral" />
                <span className="text-[10px] font-black text-neo-coral uppercase tracking-widest">AI + FinTech</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#1c1917] font-display leading-tight mb-4">
                Nirikshan AI
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Real-time financial fraud detection engine powered by machine learning. Analyzes transaction
                patterns to identify suspicious activity and reduce false positives. Built with a focus on
                explainability so analysts understand every flag.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { icon: SiPython, label: "Python" },
                  { icon: SiFastapi, label: "FastAPI" },
                  { icon: SiReact, label: "React" },
                  { icon: SiPostgresql, label: "PostgreSQL" },
                ].map(t => {
                  const Icon = t.icon
                  return (
                    <span key={t.label} className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border-2 border-gray-200 text-xs font-bold text-gray-600">
                      <Icon size={12} className="text-neo-coral" /> {t.label}
                    </span>
                  )
                })}
              </div>

              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1917] text-white font-black neo-border shadow-neo-sm text-xs uppercase tracking-wider hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <FiGithub size={14} /> Source
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider hover:border-gray-400 transition-all">
                  <FiExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>

            <div className="relative bg-[#1c1917] p-6 sm:p-8 flex items-center border-t-4 lg:border-t-0 lg:border-l-4 border-gray-200">
              <div className="w-full font-mono text-xs leading-relaxed">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-gray-500 ml-2 text-[10px]">terminal — fraud detection</span>
                </div>

                <div className="space-y-1.5">
                  <p><span className="text-green-400">$</span> <span className="text-gray-200">python detect.py --scan</span></p>
                  <p className="text-gray-500">Loading model... <span className="text-green-400">done</span></p>
                  <p className="text-gray-500">Scanning 1,247 transactions...</p>
                  <p><span className="text-neo-coral">⚠</span> <span className="text-gray-200">Flagged transaction #A4B2C</span></p>
                  <p className="text-gray-500 ml-4">Pattern: <span className="text-rose-400">unusual_velocity</span></p>
                  <p className="text-gray-500 ml-4">Risk: <span className="text-rose-400">HIGH (94.2%)</span></p>
                  <p className="text-gray-500">Scanning...</p>
                  <p><span className="text-neo-coral">⚠</span> <span className="text-gray-200">Flagged transaction #F7E1D</span></p>
                  <p className="text-gray-500 ml-4">Pattern: <span className="text-rose-400">geo_anomaly</span></p>
                  <p className="text-gray-500 ml-4">Risk: <span className="text-rose-400">HIGH (87.6%)</span></p>
                  <p className="text-gray-500 mt-2">Scan complete. <span className="text-rose-400">2 threats</span> detected.</p>
                  <p><span className="text-green-400">$</span> <span className="text-gray-500 animate-pulse">_</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
