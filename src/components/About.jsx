import { useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { FiCpu, FiCode, FiMapPin } from "react-icons/fi"

const stats = [
  { value: 5, suffix: "+", label: "Hackathons" },
  { value: 3, suffix: "", label: "Projects Shipped" },
  { value: 1, suffix: "", label: "VP Role" },
  { value: 2, suffix: "+", label: "Years Coding" },
]

function StatCounter({ target, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 55, damping: 18 })

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, target, motionVal])

  useEffect(() => {
    return spring.on("change", v => {
      if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString() + suffix
    })
  }, [spring, suffix])

  return <span ref={ref} className="font-black tabular-nums text-3xl sm:text-4xl text-neo-coral">0{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">About</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display mb-6">
              CS & AI Student<br />
              <span className="text-gray-300">Building at the intersection</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              I&apos;m a Computer Science & Business Systems student based in Nagpur, India. I build AI-powered
              solutions, compete in national hackathons, and lead tech communities.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Currently focused on machine learning for financial systems — fraud detection, risk analysis,
              and explainable AI. I love turning complex problems into practical, working products.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiMapPin className="w-4 h-4 text-neo-coral" />
              Nagpur, Maharashtra, India
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 neo-border shadow-neo p-6 text-center hover:bg-neo-coral-light hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <StatCounter target={5} suffix="+" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Hackathons</p>
              </div>
              <div className="bg-gray-50 neo-border shadow-neo p-6 text-center hover:bg-blue-50 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <StatCounter target={3} suffix="" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div className="bg-gray-50 neo-border shadow-neo p-6 text-center hover:bg-amber-50 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <StatCounter target={1} suffix="" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">VP Role</p>
              </div>
              <div className="bg-gray-50 neo-border shadow-neo p-6 text-center hover:bg-green-50 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <StatCounter target={2} suffix="+" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Years Coding</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-neo-coral-light border-2 border-neo-coral/30 rounded-lg">
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border-2 border-gray-200 text-xs font-bold text-gray-700"><FiCpu size={12} className="text-neo-coral" /> AI/ML</span>
                <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border-2 border-gray-200 text-xs font-bold text-gray-700"><FiCode size={12} className="text-neo-coral" /> Full-Stack</span>
              </div>
              <span className="text-xs text-neo-coral font-bold">#BuildingInPublic</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
