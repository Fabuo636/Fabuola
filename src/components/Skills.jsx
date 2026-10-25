import Reveal, { SectionLabel } from './Reveal.jsx'
import { useLang } from '../i18n.jsx'

export default function Skills() {
  const { t } = useLang()
  return (
    <section id="skills" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
        <SectionLabel number="02" label={t.skills.label} />
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tightest mb-20">{t.skills.title}</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-cream/10">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.08} className="bg-ink p-8 md:p-12 group hover:bg-[#232020] transition-colors duration-500">
              <div className="flex items-baseline justify-between mb-8">
                <h3 className="font-serif italic text-2xl">{g.name}</h3>
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
              </div>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/70 group-hover:text-cream transition-colors duration-500">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
