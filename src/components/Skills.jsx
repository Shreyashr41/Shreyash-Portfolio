import { motion } from "framer-motion"
import { SiPython, SiCplusplus, SiJavascript, SiMysql, SiReact, SiTailwindcss, SiHtml5, SiCss, SiFastapi, SiNodedotjs, SiPostgresql, SiMongodb, SiGit, SiGithub, SiDocker, SiLinux, SiFigma } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const skills = [
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SQL", icon: SiMysql },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "VS Code", icon: VscVscode },
  { name: "Figma", icon: SiFigma },
]

const categories = [
  { label: "Languages", skills: ["Python", "C++", "JavaScript", "SQL"] },
  { label: "Frontend", skills: ["React", "Tailwind", "HTML", "CSS"] },
  { label: "Backend", skills: ["FastAPI", "Node.js"] },
  { label: "Databases", skills: ["PostgreSQL", "MongoDB"] },
  { label: "Tools", skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Figma"] },
]

export default function Skills() {
  const allIcons = Object.fromEntries(skills.map(s => [s.name, s.icon]))

  return (
    <section id="skills" className="w-full py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Skills</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
            What I Work With
          </h2>
        </motion.div>

        <div className="space-y-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.06 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="text-xs font-black uppercase tracking-widest text-neo-coral w-24 shrink-0">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(name => {
                  const Icon = allIcons[name]
                  return (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-neo-coral/50 hover:bg-neo-coral-light transition-all cursor-default"
                    >
                      {Icon && <Icon size={14} className="text-neo-coral" />}
                      {name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
