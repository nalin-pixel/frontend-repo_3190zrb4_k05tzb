import React, { useState } from 'react'

export default function Book(){
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({
    name:'', email:'', phone:'', eventType:'Wedding', date:'', guests:'', location:'', message:''
  })
  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Submitting...')
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/booking`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      const data = await res.json()
      setStatus(data?.message || 'Submitted')
    }catch(err){ setStatus('Error submitting. Please try again.') }
  }
  return (
    <div className="bg-white">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-slate-900" style={{fontFamily:'Cinzel Decorative, serif'}}>Book Your Event</h1>
        <p className="mt-3 text-slate-600">Tell us about your celebration and we will craft a tailor-made proposal.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <input required placeholder="Full Name" className="border rounded-xl px-4 py-3" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <div className="grid md:grid-cols-2 gap-4">
            <input required type="email" placeholder="Email" className="border rounded-xl px-4 py-3" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input required placeholder="Phone" className="border rounded-xl px-4 py-3" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <select className="border rounded-xl px-4 py-3" value={form.eventType} onChange={e=>setForm({...form, eventType:e.target.value})}>
              <option>Wedding</option>
              <option>Reception</option>
              <option>Corporate</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
            <input required type="date" className="border rounded-xl px-4 py-3" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Guests" className="border rounded-xl px-4 py-3" value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})} />
            <input placeholder="Location / Venue" className="border rounded-xl px-4 py-3" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} />
          </div>
          <textarea rows={5} placeholder="Tell us more — cuisine, rituals, décor, experiences" className="border rounded-xl px-4 py-3" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          <button className="mt-2 rounded-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-600 text-white">Submit</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>
      </section>
    </div>
  )
}
