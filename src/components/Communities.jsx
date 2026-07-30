import { motion } from "framer-motion"
import { FiUsers, FiExternalLink } from "react-icons/fi"

const communities = [
  { name: "GDG Nagpur", role: "Member", icon: "G" },
  { name: "GDG Cloud Nagpur", role: "Member", icon: "C" },
  { name: "VidharbaDAO", role: "Member", icon: "V" },
  { name: "Rotarct Club Of Nagpur United", role: "Vice President", icon: "R" },
  { name: "Algorand Blockchain Club", role: "Core Contributor", icon: "A" },
]

const bgColors = ["bg-amber-50", "bg-blue-50", "bg-purple-50", "bg-green-50", "bg-rose-50"]
const iconColors = ["text-amber-600", "text-blue-600", "text-purple-600", "text-green-600", "text-rose-600"]

export default function Communities() {
  return (
    <section id="communities" className="w-full py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Communities</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
            Where I Engage
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`${bgColors[i % bgColors.length]} neo-border shadow-neo-sm p-5 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center text-lg font-black ${iconColors[i % iconColors.length]} bg-white neo-border shadow-neo-sm`}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#1c1917] leading-tight">{c.name}</h3>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">{c.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
