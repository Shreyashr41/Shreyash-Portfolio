import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiMapPin } from "react-icons/fi"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#fafaf9]">
      <div className="mx-auto px-4 sm:px-8 max-w-[1200px]">
        <div className="flex flex-col justify-center min-h-screen py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-neo-coral text-white text-sm font-black px-4 py-1.5 neo-border shadow-neo-sm">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              OPEN TO WORK
            </span>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 70 }}
              className="relative z-10"
            >
              <h1 className="font-black leading-none font-display">
                <span className="block text-7xl sm:text-8xl lg:text-9xl text-[#1c1917] tracking-tight">
                  SHREYASH
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 70 }}
              className="relative z-10"
            >
              <h1 className="font-black leading-none font-display relative">
                <span className="relative block text-7xl sm:text-8xl lg:text-9xl text-[#1c1917] tracking-tight">
                  RANDIVE
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-4 right-0 lg:right-16 z-20"
            >
              <div className="relative">
                <div className="absolute -inset-3 border-4 border-dashed border-neo-coral/40 rounded-full animate-spin-slow" />
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden neo-border shadow-neo bg-gray-100">
                  <img src="/profile.jpg" alt="Shreyash Randive" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-neo-coral text-white text-[10px] font-black px-3 py-1.5 neo-border shadow-neo-sm uppercase tracking-wider">
                  CSBS
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          >
            <p className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
              <FiMapPin className="w-4 h-4 text-neo-coral" /> Nagpur, Maharashtra, India
            </p>
            <p className="text-base text-gray-600 border-l-4 border-neo-coral pl-4 max-w-xl leading-relaxed">
              CS & Business Systems student. Building AI solutions, hacking at national competitions, leading tech communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="flex flex-wrap gap-3">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) }}>
                <motion.button
                  whileHover={{ x: -3, y: -3 }}
                  whileTap={{ x: 0, y: 0 }}
                  className="px-6 py-3 bg-[#1c1917] text-white font-black neo-border shadow-neo text-sm uppercase tracking-wider flex items-center gap-2"
                >
                  VIEW PROJECTS <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}>
                <motion.button
                  whileHover={{ x: -3, y: -3 }}
                  whileTap={{ x: 0, y: 0 }}
                  className="px-6 py-3 bg-white text-[#1c1917] font-black neo-border shadow-neo text-sm uppercase tracking-wider"
                >
                  CONTACT
                </motion.button>
              </a>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              {[
                { href: "https://github.com/ShreyashR2507", Icon: FiGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/shreyash-randive", Icon: FiLinkedin, label: "LinkedIn" },
                { href: "mailto:shreyash.randive@example.com", Icon: FiMail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white neo-border shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Icon className="w-5 h-5 text-[#1c1917]" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
            <span className="text-xs font-black tracking-widest text-gray-400 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-5 h-9 border-4 border-gray-400 rounded-full flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-2 bg-gray-400 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
