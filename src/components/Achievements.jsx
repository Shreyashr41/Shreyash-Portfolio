import { motion } from "framer-motion"
import { FiAward, FiTarget, FiBriefcase, FiStar } from "react-icons/fi"

const items = [
  { icon: FiStar, title: "SOF National Cyber Olympiad", result: "Rank 1", color: "bg-amber-50 border-amber-300", textColor: "text-amber-800", badge: "Top Tier" },
  { icon: FiAward, title: "TRIGUNA Startup Pitch", result: "Winner", color: "bg-violet-50 border-violet-300", textColor: "text-violet-800", badge: "Winner" },
  { icon: FiTarget, title: "Vice President", result: "Rotaract Nagpur United · 2024-25", color: "bg-blue-50 border-blue-300", textColor: "text-blue-800" },
  { icon: FiBriefcase, title: "Technical Volunteer", result: "Devcon 8 · Nov 2026", color: "bg-green-50 border-green-300", textColor: "text-green-800" },
  { icon: FiStar, title: "National Hackathons", result: "Multiple participations", color: "bg-rose-50 border-rose-300", textColor: "text-rose-800" },
]

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Achievements</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
            Milestones
          </h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-4 p-5 border-2 ${item.color} neo-border shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-200 shrink-0">
                  <Icon size={16} className="text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`text-sm font-bold ${item.textColor}`}>{item.title}</h3>
                    {item.badge && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-white border border-current uppercase tracking-widest shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.result}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
