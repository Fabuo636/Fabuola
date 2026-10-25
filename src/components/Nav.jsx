import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'

export default function Nav() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#work', label: t.nav.work },
    { href: '#automation', label: t.nav.automation },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-cream/80 backdrop-blur-md border-b border-ink/5' : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl italic font-medium">
          Fabuola<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-sm text-ink/70 hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 font-mono text-xs">
          {['fr', 'en'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 py-1 rounded-full uppercase transition-colors ${
                lang === l ? 'bg-ink text-cream' : 'text-ink/50 hover:text-ink'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
