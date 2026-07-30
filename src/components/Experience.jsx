import { motion } from "framer-motion"
import { FiBriefcase, FiBookOpen } from "react-icons/fi"

const experience = [
  {
    role: "Campus Ambassador",
    org: "MyCaptain, Nagpur",
    period: "Jan 2026 - Feb 2026",
    highlights: [
      "Represented MyCaptain through student outreach and campus engagement activities",
      "Promoted educational programs and increased brand awareness among students",
      "Developed communication, networking, and relationship-building skills",
      "Collaborated on promotional campaigns to strengthen brand visibility",
    ],
  },
]

const education = [
  {
    degree: "B.Tech in Computer Science and Business Systems",
    school: "St. Vincent Pallotti College of Engineering and Technology, Nagpur",
    period: "2025 - 2029",
  },
  {
    degree: "Higher Secondary Certificate (12th), MSB",
    school: "Kamla Nehru Mahavidyalaya, Nagpur",
    period: "2023 - 2025",
  },
  {
    degree: "Secondary School (Class X), CBSE",
    school: "Prerna International School, Nagpur",
    period: "2022 - 2023",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-4 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Experience</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
            Background
          </h2>
        </motion.div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white neo-border shadow-neo-sm">
                <FiBriefcase className="w-4 h-4 text-neo-coral" />
              </div>
              <h3 className="text-lg font-black text-[#1c1917] uppercase tracking-wider">Professional</h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white neo-border shadow-neo-sm p-6 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-base font-bold text-[#1c1917]">{exp.role}</h4>
                      <p className="text-sm text-neo-coral font-semibold">{exp.org}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-gray-100 border-2 border-gray-200 text-gray-600 font-bold shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-neo-coral mt-1.5 w-1.5 h-1.5 rounded-full bg-neo-coral shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white neo-border shadow-neo-sm">
                <FiBookOpen className="w-4 h-4 text-neo-coral" />
              </div>
              <h3 className="text-lg font-black text-[#1c1917] uppercase tracking-wider">Education</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border-2 border-gray-200 p-5 hover:border-neo-coral/50 transition-all"
                >
                  <p className="text-[10px] font-black text-neo-coral uppercase tracking-widest mb-2">{edu.period}</p>
                  <h4 className="text-sm font-bold text-[#1c1917] leading-snug mb-1">{edu.degree}</h4>
                  <p className="text-xs text-gray-500">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
