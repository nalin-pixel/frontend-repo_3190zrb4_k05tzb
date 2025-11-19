import React from 'react'
import Hero from '../components/Hero'
import { ServicesSection, MenuSection, GalleryPreview, Testimonials, CTA } from '../components/Sections'

export default function Home(){
  return (
    <div>
      <Hero />
      <ServicesSection />
      <MenuSection />
      <GalleryPreview />
      <Testimonials />
      <CTA />
    </div>
  )
}
