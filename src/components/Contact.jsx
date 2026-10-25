import Reveal, { SectionLabel } from './Reveal.jsx'
import { useLang } from '../i18n.jsx'

export default function Contact() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-28 md:pt-40 pb-10">
        <SectionLabel number="05" label={t.contact.label} />
        <Reveal>
          <h2 className="font-serif font-light text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tightest">
            {t.contact.title1}
            <br />
            <span className="italic text-accent">{t.contact.title2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-md text-cream/60 text-lg">{t.contact.p}</p>
        </Reveal>
        <Reveal delay={0.25}>
          <a
            href={`mailto:${t.contact.email}`}
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-cream/20 px-8 py-4 transition-all duration-500 hover:border-accent hover:bg-accent"
          >
            <span className="font-mono text-sm">{t.contact.cta}</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <div className="mt-28 flex flex-col md:flex-row justify-between gap-4 border-t border-cream/10 pt-8 font-mono text-xs text-cream/40">
          <span>© {year} Fabuola — {t.contact.rights}</span>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="link-underline hover:text-cream">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-underline hover:text-cream">LinkedIn</a>
            <a href={`mailto:${t.contact.email}`} className="link-underline hover:text-cream">{t.contact.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
