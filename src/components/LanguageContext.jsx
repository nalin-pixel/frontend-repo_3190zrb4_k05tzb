import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext()

const dictionaries = {
  en: {
    nav: { home: 'Home', about: 'About', menu: 'Menu', services: 'Services', gallery: 'Gallery', blog: 'Blog', book: 'Book Now', contact: 'Contact' },
    hero: {
      welcome: 'Welcome to Kashmir Caterers — where every gathering becomes a cherished memory',
      explore: 'Explore',
      contact: 'Contact'
    },
    sections: {
      servicesTitle: 'Our Signature Services',
      menuTitle: 'Culinary Heritage, Elegantly Served',
      galleryTitle: 'Gallery',
      testimonialsTitle: 'Trust, Earned Over Generations',
      locationsTitle: 'Proudly Serving'
    },
    footer: { rights: 'All Rights Reserved.' }
  },
  ur: {
    nav: { home: 'ہوم', about: 'ہمارے بارے میں', menu: 'می뉴', services: 'سروسز', gallery: 'گیلری', blog: 'بلاگ', book: 'ابھی بُک کریں', contact: 'رابطہ' },
    hero: { welcome: 'کشمیر کیٹررز میں خوش آمدید — جہاں ہر تقریب ایک خوبصورت یاد بن جاتی ہے', explore: 'دیکھیں', contact: 'رابطہ' },
    sections: { servicesTitle: 'ہماری خصوصی خدمات', menuTitle: 'ذائقوں کی وراثت، خوبصورتی سے پیش', galleryTitle: 'گیلری', testimonialsTitle: 'اعتماد — نسلوں کی کمائی', locationsTitle: 'ہم خدمت انجام دیتے ہیں' },
    footer: { rights: 'جملہ حقوق محفوظ ہیں۔' }
  },
  hi: {
    nav: { home: 'होम', about: 'हमारे बारे में', menu: 'मेन्यू', services: 'सेवाएँ', gallery: 'गैलरी', blog: 'ब्लॉग', book: 'बुक नाउ', contact: 'संपर्क' },
    hero: { welcome: 'काश्मीर कैटरर्स में आपका स्वागत है — जहाँ हर आयोजन याद बन जाता है', explore: 'देखें', contact: 'संपर्क' },
    sections: { servicesTitle: 'हमारी विशेष सेवाएँ', menuTitle: 'पारंपरिक स्वाद, शान से परोसा', galleryTitle: 'गैलरी', testimonialsTitle: 'पीढ़ियों का विश्वास', locationsTitle: 'हम सेवा देते हैं' },
    footer: { rights: 'सर्वाधिकार सुरक्षित।' }
  },
  ta: {
    nav: { home: 'முகப்பு', about: 'எங்களை பற்றி', menu: 'உணவுப் பட்டியல்', services: 'சேவைகள்', gallery: 'கேலரி', blog: 'வலைப்பதிவு', book: 'இப்போது பதிவு', contact: 'தொடர்பு' },
    hero: { welcome: 'காஷ்மீர் கேட்டர்ஸ் — ஒவ்வொரு விழாவும் நினைவாக மாறும்', explore: 'ஆராய்க', contact: 'தொடர்பு' },
    sections: { servicesTitle: 'எங்கள் பிரத்யேக சேவைகள்', menuTitle: 'பாரம்பரிய சுவைகள், மேம்பட்ட அளிப்பு', galleryTitle: 'கேலரி', testimonialsTitle: 'தலைமுறைகளின் நம்பிக்கை', locationsTitle: 'சேவை அளிக்கும் இடங்கள்' },
    footer: { rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] || dictionaries.en }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
