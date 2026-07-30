import { useState, useEffect } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
  { label: "Communities", href: "#communities" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const els = links.map((l) => document.getElementById(l.href.slice(1)))
      let current = "home"
      for (let i = els.length - 1; i >= 0; i--) {
        if (els[i] && els[i].getBoundingClientRect().top <= 200) {
          current = links[i].href.slice(1); break
        }
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b-4 border-[#1c1917]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="text-xl font-black tracking-tight text-[#1c1917] font-display">
          SR<span className="text-neo-coral">.</span>
        </a>

        <div className="hidden md:flex items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-150 ${
                active === link.href.slice(1) ? "text-neo-coral" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex md:hidden items-center justify-center w-10 h-10 text-gray-500 hover:text-black transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-white md:hidden" onClick={() => setOpen(false)}>
          <div className="flex flex-col items-center justify-center h-full gap-8" onClick={(e) => e.stopPropagation()}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                  active === link.href.slice(1) ? "text-neo-coral" : "text-gray-400 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
