import React from 'react'

export default function About(){
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Our Story</h1>
        <p className="mt-4 text-slate-700 leading-relaxed">Born in the heart of the valley, Kashmir Caterers carries forward the legacy of gracious Kashmiri mehmaan-nawazi — hospitality that is warm, thoughtful, and refined. From intimate mehfils to royal weddings and global corporate galas, our craft blends time-honoured techniques with modern precision. Every event we curate is a narrative — of flavour, culture, and celebration.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <div className="text-4xl text-yellow-600">25+</div>
            <div className="text-sm text-slate-600">Years of culinary excellence</div>
          </div>
          <div className="p-6 border rounded-xl">
            <div className="text-4xl text-yellow-600">1000+</div>
            <div className="text-sm text-slate-600">Events catered globally</div>
          </div>
          <div className="p-6 border rounded-xl">
            <div className="text-4xl text-yellow-600">4.9/5</div>
            <div className="text-sm text-slate-600">Client satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  )
}
