import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionLabel } from './Reveal.jsx'
import { useLang } from '../i18n.jsx'

export default function Projects() {
  const { t } = useLang()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
      <SectionLabel number="03" label={t.work.label} />
      <Reveal>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tightest mb-16">{t.work.title}</h2>
      </Reveal>

      <div className="border-t border-ink/10">
        {t.work.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-b border-ink/10 py-10 md:py-12 grid md:grid-cols-12 gap-4 items-center cursor-pointer"
            >
              <span className="font-mono text-xs text-stone-450 md:col-span-1">0{i + 1}</span>
              <h3 className="font-serif text-2xl md:text-4xl tracking-tightest md:col-span-5 transition-transform duration-500 group-hover:translate-x-3">
                {p.title}
              </h3>
              <div className="flex gap-2 md:col-span-3">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-xs text-ink/60">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-stone-450 md:col-span-2">{p.year}</span>
              <span className="hidden md:flex md:col-span-1 justify-end text-xl transition-all duration-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-accent">
                →
              </span>

              <AnimatePresence>
                {hovered === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="md:col-span-11 md:col-start-2 text-stone-450 overflow-hidden"
                  >
                    {p.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
