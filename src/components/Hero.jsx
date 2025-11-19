import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from './LanguageContext'

const words = ['Namaste', 'Aadab', 'Hello']

export default function Hero() {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-950/90" />
        <img src="/hero1.jpg" alt="Event" className="w-full h-full object-cover opacity-60 mix-blend-overlay" onError={(e)=>{e.currentTarget.style.display='none'}}/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_60%)]"/>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-6xl md:text-7xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-500"
              style={{fontFamily:'Cinzel Decorative, serif'}}
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="max-w-3xl mx-auto text-slate-200 text-lg md:text-2xl" style={{fontFamily:'Poppins, sans-serif'}}>
          {t.hero.welcome}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#menu" className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg hover:shadow-yellow-500/30 transition">{t.hero.explore}</a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 transition">{t.hero.contact}</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"/>
    </section>
  )
}
