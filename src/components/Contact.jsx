import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowUpRight, FiSend, FiInstagram } from "react-icons/fi"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-4 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Contact</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-600 leading-relaxed">
              Open to opportunities, collaborations, and interesting conversations. Let&apos;s talk.
            </p>

            <div className="space-y-3">
              <a href="mailto:shreyashrandive41@gmail.com" className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 hover:border-neo-coral/50 transition-all group">
                <div className="w-10 h-10 bg-gray-50 border-2 border-gray-200 flex items-center justify-center shrink-0">
                  <FiMail className="w-4 h-4 text-neo-coral" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-semibold text-gray-700 truncate">shreyashrandive41@gmail.com</p>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-neo-coral transition-colors shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200">
                <div className="w-10 h-10 bg-gray-50 border-2 border-gray-200 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-4 h-4 text-neo-coral" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-semibold text-gray-700">Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Social</p>
              <div className="flex gap-2">
                {[
                  { Icon: FiGithub, href: "https://github.com/Shreyashr41", label: "GitHub" },
                  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/shreyashr41", label: "LinkedIn" },
                  { Icon: FiInstagram, href: "https://instagram.com/shreyash.r41", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-neo-coral/50 hover:text-neo-coral transition-all">
                    <Icon className="w-4 h-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white neo-border shadow-neo p-8"
          >
            <h3 className="text-lg font-bold text-[#1c1917] mb-1">Send a message</h3>
            <p className="text-sm text-gray-400 mb-6">I&apos;ll get back to you within 24 hours.</p>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-[#1c1917] text-sm placeholder-gray-400 focus:outline-none focus:border-neo-coral transition-colors" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-[#1c1917] text-sm placeholder-gray-400 focus:outline-none focus:border-neo-coral transition-colors" />
              </div>
              <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-[#1c1917] text-sm placeholder-gray-400 focus:outline-none focus:border-neo-coral transition-colors resize-none" />
              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 0, y: 0 }}
                type="submit"
                className="w-full px-6 py-3 bg-neo-coral text-white font-black neo-border shadow-neo-sm text-sm uppercase tracking-wider hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
              >
                <FiSend size={14} /> Send
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 text-center border-t-2 border-gray-200 pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Designed & developed by Shreyash Randive
          </p>
        </div>
      </div>
    </section>
  )
}
