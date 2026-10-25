import Reveal, { SectionLabel } from './Reveal.jsx'
import { useLang } from '../i18n.jsx'

export default function Automation() {
  const { t } = useLang()
  return (
    <section id="automation" className="mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
      <SectionLabel number="04" label={t.automation.label} />
      <div className="grid md:grid-cols-12 gap-10 mb-20">
        <Reveal className="md:col-span-6">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tightest">{t.automation.title}</h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
          <p className="text-lg leading-relaxed text-ink/75">{t.automation.p}</p>
        </Reveal>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {t.automation.items.map((item, i) => (
          <Reveal key={item.t} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-ink/10 p-8 transition-all duration-500 hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(232,85,47,0.25)]">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-serif italic text-2xl">{item.t}</h3>
              <p className="mt-4 text-stone-450 leading-relaxed">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
