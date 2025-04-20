import React, { ReactNode, useRef } from 'react';
import '../../styles/parallax.css';

interface ParallaxContainerProps {
  children: ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Function to handle scrolling to specific sections
  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const sectionHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: index * sectionHeight,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="parallax-container"
      style={{ 
        background: 'black',
        color: 'white'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;