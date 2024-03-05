import React, { useEffect } from 'react'
import Hero from '../homecomp/Hero'
import About from '../homecomp/About'
import { ParallaxBanner } from 'react-scroll-parallax'
import Skills from '../homecomp/Skills';
import Blog from '../homecomp/Blog';
import Projects from '../homecomp/Projects';


function Home() {



  return (
    <div>
      
        <Hero />
        <ParallaxBanner 
        layers={[
          { image: 'hs-bg-bepixeled.jpg', speed: -20}
        ]}
        className='md:h-96 h-48 w-full bg-cover bg-center bg-no-repeat top-0'
        />
        <About />
        <ParallaxBanner 
        layers={[
          { image: 'bepixeled-hero-bg.png', speed: -20},
          { image: 'planet1.png', speed: -10,  translateY: [50, 0], translateX: [12, 300],
          scale: [1, 3, 'easeOutCubic'], className: 'w-40 h-40'},
        ]}
        className='md:h-96 h-48  w-full bg-cover bg-center bg-no-repeat bottom-0'
        />
        <Projects />
        <ParallaxBanner
        layers={[
          { image: 'hs-bg-bepixeled.jpg', speed: -20},
          { image: 'planet1.png', speed: -10, className: 'w-40 h-40', translateY: [70, 0], translateX: [600, 300], scale: [1.5, 0.5, 'easeOutCubic']},
        ]}
        className='md:h-96 h-48  w-full bg-cover bg-no-repeat bg-center top-0'
        />
        <Skills />
        <Blog />
    </div>
  )
}

export default Home