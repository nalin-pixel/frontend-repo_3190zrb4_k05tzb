import React from 'react'

const categories = [
  { title: 'Royal Wazwan', items: ['Rogan Josh','Gushtaba','Rista','Yakhni','Tabakh Maaz','Aab Gosht'] },
  { title: 'Grills & Live Stations', items: ['Seekh Kebabs','Kandur Breads','Korma Stations','Kahwa Bar'] },
  { title: 'Vegetarian Classics', items: ['Dum Aloo','Haakh Saag','Nadur Yakhni','Paneer Kaliya'] },
  { title: 'Sweets & Finishes', items: ['Phirni','Shufta','Sheer Khurma','Modur Pulao'] }
]

export default function Menu(){
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Our Menu</h1>
        <p className="mt-3 text-slate-600">A curated celebration of Kashmiri culinary artistry complemented with global favourites. Every menu can be customized for dietary preferences, religious observances, and regional tastes.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {categories.map((c)=> (
            <div key={c.title} className="p-6 rounded-2xl border border-slate-200">
              <div className="text-xl font-semibold text-slate-900">{c.title}</div>
              <ul className="mt-3 space-y-2 text-slate-700">
                {c.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
