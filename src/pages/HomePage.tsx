import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import { ParallaxContainer } from '../components/Parallax'
import ParallaxLayer from '../components/Parallax/ParallaxLayer'
import useScrollPosition from '../hooks/useScrollPosition'

const HomePage: React.FC = () => {
  const scrollPosition = useScrollPosition();
  
  // Configure scroll speeds for each section
  const speeds = {
    hero: 0.05,     // Slower movement for hero
    about: 0.1,     // Slightly faster for about
    projects: 0.15, // Even faster for projects
    contact: 0.2    // Fastest for contact (most dramatic effect)
  };
  
  return (
    <ParallaxContainer>
      <ParallaxLayer offset={scrollPosition} speed={speeds.hero} index={0}>
        <Hero />
      </ParallaxLayer>
      
      <ParallaxLayer offset={scrollPosition} speed={speeds.about} index={1}>
        <About />
      </ParallaxLayer>
      
      <ParallaxLayer offset={scrollPosition} speed={speeds.projects} index={2}>
        <Projects />
      </ParallaxLayer>
      
      <ParallaxLayer offset={scrollPosition} speed={speeds.contact} index={3}>
        <Contact />
      </ParallaxLayer>
    </ParallaxContainer>
  )
}

export default HomePage