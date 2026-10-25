import Reveal, { SectionLabel } from './Reveal.jsx'
import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
      <SectionLabel number="01" label={t.about.label} />
      <div className="grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tightest">
            {t.about.title}
          </h2>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink/75">
          <Reveal delay={0.1}><p>{t.about.p1}</p></Reveal>
          <Reveal delay={0.2}><p>{t.about.p2}</p></Reveal>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-6 border-t border-ink/10 pt-10">
        {t.about.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div className="font-serif text-4xl md:text-6xl text-accent">{s.n}</div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-stone-450">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
