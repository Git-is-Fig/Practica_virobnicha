import React, { useState, useEffect } from 'react';
import '../App.css';

const StarryBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="background" style={{ backgroundPositionY: `${-scrollPosition}px` }} />;
};

export default StarryBackground;
