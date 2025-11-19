import React from 'react'

const services = [
  { title: 'End-to-End Event Catering', desc: 'Concept, curation, cuisine, service, décor, logistics — all orchestrated with precision.' },
  { title: 'Wazwan Specialists', desc: 'Master chefs of the traditional multi-course Kashmiri feast, served in authentic style.' },
  { title: 'Luxury Plated Service', desc: 'Elegant course-wise service for VIP and intimate gatherings.' },
  { title: 'Buffet & Live Counters', desc: 'Interactive stations, tandoor, grills, kahwa bar, dessert studio.' },
  { title: 'Destination & Outdoor', desc: 'From valley gardens to mountain resorts and beachside venues across India.' },
  { title: 'Hospitality Partnerships', desc: 'Tailored programs for hotels, banquets, and restaurants.' }
]

export default function Services(){
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Our Services</h1>
        <p className="mt-3 text-slate-600">We create bespoke experiences for weddings, corporate events, social celebrations, and large gatherings. Every service is customizable to your preferences and traditions.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="p-6 rounded-2xl border border-slate-200">
              <div className="text-xl font-semibold text-slate-900">{s.title}</div>
              <div className="text-sm text-slate-600 mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
