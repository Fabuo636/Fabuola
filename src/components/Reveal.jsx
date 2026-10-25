import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ number, label }) {
  return (
    <Reveal className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-accent">{number}</span>
      <span className="h-px w-10 bg-ink/30" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-450">{label}</span>
    </Reveal>
  )
}
