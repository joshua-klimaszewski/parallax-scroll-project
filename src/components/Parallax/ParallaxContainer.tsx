import React, { ReactNode, useRef } from 'react';
import '../../styles/parallax.css';

interface ParallaxContainerProps {
  children: ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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