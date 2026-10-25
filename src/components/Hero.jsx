import { motion, useScroll, useTransform } from 'framer-motion'
import Scene3D from './Scene3D.jsx'
import { useLang } from '../i18n.jsx'

const lineAnim = (delay) => ({
  initial: { y: '110%' },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { t } = useLang()
  const { scrollY } = useScroll()
  // Le canvas 3D reste fixe derrière le contenu et s'estompe après le hero
  const sceneOpacity = useTransform(scrollY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [0.9, 0])
  const sceneWidth = 'w-full md:w-[55%]'

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        style={{ opacity: sceneOpacity }}
        className={`fixed inset-y-0 right-0 ${sceneWidth} pointer-events-none z-0`}
      >
        <Scene3D />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-450">{t.hero.based}</span>
        </motion.div>

        <h1 className="font-serif font-light text-[clamp(2.8rem,8vw,7rem)] leading-[1.02] tracking-tightest">
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineAnim(0.3)}>{t.hero.line1}</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block italic text-accent" {...lineAnim(0.45)}>{t.hero.line2}</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineAnim(0.6)}>{t.hero.line3}</motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-md text-stone-450 leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute -bottom-24 left-6 md:left-10 flex items-center gap-3 font-mono text-xs text-stone-450"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          {t.hero.scroll}
        </motion.div>
      </div>
    </section>
  )
}
