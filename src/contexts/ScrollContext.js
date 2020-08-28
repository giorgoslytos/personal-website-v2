import React, { createContext, useState, useEffect } from 'react';

export const ScrollContext = createContext();

const ScrollContextProvider = (props) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [navPos, setNavPos] = useState({ pre: 0, now: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
      setNavPos({ pre: navPos.now, now: window.scrollY });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  return (
    <ScrollContext.Provider value={{ scrollPos, navPos }}>
      {props.children}
    </ScrollContext.Provider>
  );
}

export default ScrollContextProvider;