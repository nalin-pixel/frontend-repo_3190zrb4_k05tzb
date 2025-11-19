import React from 'react'

export default function Gallery(){
  const photos = Array.from({length:12}, (_,i)=> `/g${(i%6)+1}.jpg`)
  const videos = [
    { title: 'Wedding Montage', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Corporate Gala', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
  ]
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Gallery</h1>
        <p className="mt-2 text-slate-600">Real celebrations, real smiles. A glimpse into our world of crafted moments.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((src,i)=> (
            <img key={i} src={src} alt="Event" className="rounded-xl object-cover h-48 w-full" onError={(e)=>{e.currentTarget.style.visibility='hidden'}}/>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-12">Videos</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {videos.map(v => (
            <div key={v.title} className="aspect-video">
              <iframe className="w-full h-full rounded-xl" src={v.url} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
