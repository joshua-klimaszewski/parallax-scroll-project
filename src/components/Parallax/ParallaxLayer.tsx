import React, { useEffect, useState, useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  offset: number;
  speed: number;
  index?: number;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ children, offset, speed, index = 0 }) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  
  // Calculate section boundaries
  const sectionStart = index * window.innerHeight;
  const sectionMiddle = sectionStart + (window.innerHeight / 2);
  
  useEffect(() => {
    // Calculate how far we are from the middle of this section (-1 to 1 range)
    // Where 0 means we're exactly at the middle
    const distanceFromMiddle = (offset - sectionMiddle) / window.innerHeight;
    
    // Check if we're near this section
    const isNearSection = Math.abs(distanceFromMiddle) < 1.5;
    
    if (isNearSection) {
      // Calculate effects based on distance from the middle
      
      // 1. Scale: from 0.7 when far to 1 when centered
      const newScale = 0.8 + (1 - Math.min(1, Math.abs(distanceFromMiddle))) * 0.2;
      
      // 2. Opacity: full opacity when centered, fades as we scroll away
      const newOpacity = 0.3 + (1 - Math.min(1, Math.abs(distanceFromMiddle) * 1.2)) * 0.7;
      
      // 3. Translate: create parallax effect
      const newTranslateY = distanceFromMiddle * speed * window.innerHeight * -0.1;
      
      setScale(newScale);
      setOpacity(newOpacity);
      setTranslateY(newTranslateY);
    }
  }, [offset, speed, index, sectionMiddle]);

  const style = {
    position: 'absolute' as const,
    width: '100%',
    height: '100vh',
    top: `${index * 100}vh`,
    zIndex: 100 - index,
    opacity,
    transform: `translateY(${translateY}px) scale(${scale})`,
    transformOrigin: 'center center',
    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    willChange: 'transform, opacity',
    scrollSnapAlign: 'center',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  };

  return (
    <div ref={layerRef} style={style} className="parallax-layer">
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxLayer;