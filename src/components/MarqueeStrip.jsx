import { cn } from "../lib/utils"

export default function MarqueeStrip({ items, direction = "left", speed = "normal", className, itemClassName, separator = "✦" }) {
  const repeated = [...items, ...items, ...items]
  const animClass = speed === "slow"
    ? `animate-marquee-${direction}-slow`
    : `animate-marquee-${direction}`

  return (
    <div className={cn("relative w-full overflow-hidden border-y-4 border-black py-4", className)}>
      <div className={cn("flex gap-8 w-max", animClass)}>
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className={cn("text-lg md:text-xl font-black uppercase tracking-widest whitespace-nowrap", itemClassName)}>
              {item}
            </span>
            <span className="text-xl font-black opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
