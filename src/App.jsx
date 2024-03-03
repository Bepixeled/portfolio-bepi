import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'	
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Blog from './components/homecomp/Blog'
import NotFound from './components/pages/NotFound'
import Impressum from './components/pages/Impressum'
import { Routes, Route } from 'react-router-dom'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

function App() {

  return (
    <>
    <div className='min-h-screen flex flex-col justify-between'>
    <ParallaxProvider>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
     <Footer />
      </ParallaxProvider>
     </div>
    </>
  )
}

export default App
