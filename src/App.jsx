import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { LanguageProvider } from './components/LanguageContext'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Book from './pages/Book'
import Blog from './pages/Blog'

function App(){
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="menu" element={<Menu/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="services" element={<Services/>} />
          <Route path="book" element={<Book/>} />
          <Route path="blog" element={<Blog/>} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
