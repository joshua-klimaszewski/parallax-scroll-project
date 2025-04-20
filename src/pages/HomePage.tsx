import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import { ParallaxContainer } from '../components/Parallax'
import ParallaxLayer from '../components/Parallax/ParallaxLayer'
import useScrollPosition from '../hooks/useScrollPosition'

const HomePage: React.FC = () => {
  const scrollPosition = useScrollPosition();
  
  return (
    <ParallaxContainer>
      <ParallaxLayer offset={scrollPosition} speed={0.05} index={0}>
        <Hero />
      </ParallaxLayer>
      
      <ParallaxLayer offset={scrollPosition} speed={0.1} index={1}>
        <About />
      </ParallaxLayer>
      
      <ParallaxLayer offset={scrollPosition} speed={0.15} index={2}>
        <Projects />
      </ParallaxLayer>
      
      <ParallaxLayer offset={scrollPosition} speed={0.2} index={3}>
        <Contact />
      </ParallaxLayer>
    </ParallaxContainer>
  )
}

export default HomePage