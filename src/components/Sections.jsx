import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from './LanguageContext'

export function ServicesSection(){
  const { t } = useI18n()
  const items = [
    { title: 'Weddings & Receptions', desc: 'Royal Wazwan feasts, grand service rituals, live tandoor stations, and elegant décor that celebrates Kashmiri grace.' },
    { title: 'Corporate & VIP', desc: 'Fine-dining setups, plated service, curated menus, and a discreet, professional staff for premium experiences.' },
    { title: 'Social Celebrations', desc: 'Birthdays, anniversaries, engagements, and intimate mehfils — personalized with warmth and precision.' },
    { title: 'Hospitality Partnerships', desc: 'Dedicated catering for hotels, restaurants, and banquets with consistent quality and branding.' },
    { title: 'Custom Events', desc: 'From valley-inspired thematic décor to bespoke menus — we bring your vision to life beautifully.' },
    { title: 'Large Gatherings', desc: 'Seamless logistics and a trained team for large-scale events, religious gatherings, and community feasts.' }
  ]
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>{t.sections.servicesTitle}</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="p-6 rounded-2xl border border-yellow-500/20 shadow-sm hover:shadow-lg transition">
              <div className="text-xl font-semibold text-slate-900">{it.title}</div>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right"><Link to="/services" className="text-yellow-700 hover:text-red-600">Learn more →</Link></div>
      </div>
    </section>
  )
}

export function MenuSection(){
  const { t } = useI18n()
  const dishes = [
    { name: 'Rogan Josh', note: 'Slow-cooked lamb in aromatic Kashmiri spices' },
    { name: 'Gushtaba', note: 'Royal meatballs simmered in rich yoghurt gravy' },
    { name: 'Yakhni', note: 'Fragrant, silky yoghurt-based curry' },
    { name: 'Tabakh Maaz', note: 'Crisp rib delicacy finished in ghee' },
    { name: 'Kahwa & Noon Chai', note: 'Warm, soulful beverages served ceremonially' }
  ]
  return (
    <section className="py-16 bg-slate-50" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>{t.sections.menuTitle}</h2>
        <div className="mt-8 grid md:grid-cols-5 gap-4">
          {dishes.map(d=> (
            <div key={d.name} className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="font-semibold text-slate-900">{d.name}</div>
              <div className="text-xs text-slate-600 mt-1">{d.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right"><Link to="/menu" className="text-yellow-700 hover:text-red-600">View full menu →</Link></div>
      </div>
    </section>
  )
}

export function GalleryPreview(){
  const images = ['/g1.jpg','/g2.jpg','/g3.jpg','/g4.jpg','/g5.jpg','/g6.jpg']
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Gallery</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src,i)=> (
            <img key={i} src={src} alt="Event" className="rounded-xl object-cover h-48 w-full" onError={(e)=>{e.currentTarget.style.visibility='hidden'}}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials(){
  const items = [
    { q: 'A feast worthy of royalty — our guests still talk about the wazwan.', a: 'S. Mir, Srinagar' },
    { q: 'Professional, punctual, and utterly delicious. Perfect for our corporate gala.', a: 'A. Khan, Delhi' },
    { q: 'They cared for our traditions with respect and elegance. Flawless.', a: 'R. Dar, Dubai' }
  ]
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>What clients say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.q} className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-slate-800">“{it.q}”</div>
              <div className="text-sm text-slate-500 mt-3">— {it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA(){
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-3xl md:text-4xl font-semibold text-yellow-300" style={{fontFamily:'Cinzel Decorative, serif'}}>Let’s craft your perfect celebration</div>
        <p className="mt-3 text-slate-300 max-w-3xl mx-auto">Share your vision — cuisine, décor, rituals, guest experience. Our team responds within 24 hours with a tailored plan and quote.</p>
        <Link to="/book" className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg">Start planning</Link>
      </div>
    </section>
  )
}
