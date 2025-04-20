import { useEffect, useState, useRef } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Get the parallax container element once it's mounted
    setTimeout(() => {
      const container = document.querySelector('.parallax-container') as HTMLDivElement;
      if (container) {
        containerRef.current = container;
        
        const handleScroll = () => {
          if (containerRef.current) {
            setScrollPosition(containerRef.current.scrollTop);
          }
        };

        // Add the scroll event listener to the container
        containerRef.current.addEventListener('scroll', handleScroll);
        
        // Initial position check
        handleScroll();
        
        // Cleanup function to remove the event listener
        return () => {
          if (containerRef.current) {
            containerRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }
    }, 100); // Small delay to ensure container is mounted
  }, []);

  return scrollPosition;
};

export default useScrollPosition;