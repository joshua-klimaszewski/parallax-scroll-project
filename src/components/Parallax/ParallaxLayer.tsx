import React, { useEffect, useState } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  offset: number;
  speed: number;
  index?: number;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ children, offset, speed, index = 0 }) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [skew, setSkew] = useState(0);
  
  // Calculate section boundaries
  const sectionStart = index * window.innerHeight;
  const sectionEnd = (index + 1) * window.innerHeight;
  
  // Calculate scroll progress through this section (0 to 1)
  const progressThroughSection = Math.max(0, Math.min(1, 
    (offset - sectionStart) / (window.innerHeight * 0.5)
  ));
  
  useEffect(() => {
    // Determine if we should show this section
    const isSectionActive = offset >= sectionStart - window.innerHeight && 
                           offset <= sectionEnd + window.innerHeight;
    
    // Calculate the morphing effects
    // 1. Scale section from 1 down to 0.7 as you scroll past
    const newScale = Math.max(0.7, 1 - (progressThroughSection * 0.3));
    
    // 2. Fade out slightly as you scroll past
    const newOpacity = Math.max(0.3, 1 - (progressThroughSection * 0.7));
    
    // 3. Add skew effect for more dramatic morphing
    const newSkew = progressThroughSection * 3; // skew up to 3 degrees
    
    setScale(newScale);
    setOpacity(newOpacity);
    setSkew(newSkew);
  }, [offset, index, progressThroughSection, sectionStart, sectionEnd]);

  const style = {
    transform: `translateY(${offset * speed}px) scale(${scale}) skewY(${skew}deg)`,
    position: 'absolute' as const,
    width: '100%',
    height: '100vh',
    top: `${index * 100}vh`,
    zIndex: 100 - index, // Higher layers have lower z-index
    opacity,
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
    willChange: 'transform, opacity',
    transformOrigin: 'center center',
  };

  return <div style={style} className="parallax-layer">{children}</div>;
};

export default ParallaxLayer;