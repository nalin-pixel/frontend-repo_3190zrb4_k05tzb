import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useI18n } from './LanguageContext'

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-yellow-500/20 text-yellow-300' : 'text-slate-200 hover:text-yellow-300'}`

export default function Layout() {
  const { t, setLang, lang } = useI18n()
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="backdrop-blur-xl bg-slate-900/70 border-b border-yellow-500/20">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="Kashmir Caterers" className="h-10 w-10 object-contain" onError={(e)=>{e.currentTarget.src='/favicon.svg'}} />
                <div className="text-white">
                  <div className="text-xl font-semibold tracking-wide" style={{fontFamily:'Cinzel Decorative, serif'}}>Kashmir Caterers</div>
                  <div className="text-xs text-yellow-400/80" style={{fontFamily:'Poppins, sans-serif'}}>Fine Events • Authentic Flavours</div>
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/about" className={navLinkClass}>{t.nav.about}</NavLink>
              <NavLink to="/menu" className={navLinkClass}>{t.nav.menu}</NavLink>
              <NavLink to="/services" className={navLinkClass}>{t.nav.services}</NavLink>
              <NavLink to="/gallery" className={navLinkClass}>{t.nav.gallery}</NavLink>
              <NavLink to="/blog" className={navLinkClass}>{t.nav.blog}</NavLink>
            </nav>
            <div className="flex items-center gap-3">
              <select value={lang} onChange={(e)=>setLang(e.target.value)} className="bg-slate-800/80 text-yellow-200 px-3 py-2 rounded-full border border-yellow-500/30 text-sm">
                <option value="en">EN</option>
                <option value="ur">اردو</option>
                <option value="hi">हिंदी</option>
                <option value="ta">தமிழ்</option>
              </select>
              <Link to="/book" className="bg-gradient-to-r from-yellow-500 to-red-600 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-yellow-500/20 transition">
                {t.nav.book}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-24">
        <Outlet />
      </main>
      <footer className="mt-20 bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl text-yellow-400" style={{fontFamily:'Cinzel Decorative, serif'}}>Kashmir Caterers</div>
            <p className="mt-3 text-sm text-slate-300">From the serene valleys to your grand celebrations — authentic Kashmiri hospitality, curated with modern perfection.</p>
          </div>
          <div>
            <div className="font-semibold mb-2 text-yellow-300">Explore</div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/book">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-yellow-300">Contact</div>
            <p className="text-sm">Boulevard Road, Srinagar, Jammu & Kashmir<br/>+91 9XXXX-XXXXX<br/>hello@kashmircaterers.com</p>
          </div>
          <div>
            <div className="font-semibold mb-2 text-yellow-300">Follow</div>
            <p className="text-sm">Instagram • Facebook • YouTube</p>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Kashmir Caterers. {t.footer.rights}</div>
      </footer>
    </div>
  )
}
