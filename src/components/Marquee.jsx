import { useLang } from '../i18n.jsx'

export default function Marquee() {
  const { t } = useLang()
  const items = [...t.marquee, ...t.marquee]
  return (
    <div className="border-y border-ink/10 py-5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee gap-12">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12 font-serif italic text-2xl text-ink/60">
            {item}
            <span className="text-accent text-sm not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
