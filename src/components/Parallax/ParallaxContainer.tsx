import React, { ReactNode } from 'react';
import '../../styles/parallax.css';

interface ParallaxContainerProps {
  children: ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  // Count the number of direct children to set the height
  const childCount = React.Children.count(children);
  
  return (
    <div 
      className="parallax-container"
      style={{ 
        height: `${childCount * 100}vh`,
        background: 'black',
        color: 'white'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;