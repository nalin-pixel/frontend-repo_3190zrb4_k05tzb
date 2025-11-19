import React from 'react'

const posts = [
  { title: 'The Art of Wazwan: A Royal Journey', excerpt: 'Discover the heritage of Kashmir’s most celebrated culinary tradition and how we present it for modern celebrations.' },
  { title: 'Designing a Luxurious Yet Cultural Wedding', excerpt: 'Balancing premium aesthetics with Kashmiri identity — our design philosophy.' },
  { title: 'How to Plan a Seamless Corporate Gala', excerpt: 'Timelines, service formats, and menu strategies for memorable corporate events.' }
]

export default function Blog(){
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Insights & Stories</h1>
        <p className="mt-2 text-slate-600">Thoughts from our kitchen and design studio — crafted to inspire your next celebration.</p>
        <div className="mt-8 grid gap-6">
          {posts.map(p => (
            <article key={p.title} className="p-6 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">{p.title}</h2>
              <p className="mt-2 text-slate-600">{p.excerpt}</p>
              <button className="mt-4 text-yellow-700 hover:text-red-600">Read more →</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
