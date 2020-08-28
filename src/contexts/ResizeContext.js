import React, { createContext, useState, useEffect } from 'react';

export const ResizeContext = createContext();

const ResizeContextProvider = (props) => {
  const [height, setHeight] = useState(350);
  const [width, setWidth] = useState(550);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const debouncedHandleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < 1200 && window.innerWidth > 800) {
        setWidth(window.innerWidth / 2.3)
        setHeight(window.innerWidth / 2.3 * .64)
      }
      else if (window.innerWidth >= 1200) {
        setWidth(550)
        setHeight(350)
      } else if (window.innerWidth < 630) {
        setWidth(window.innerWidth - 70)
        setHeight((window.innerWidth - 70) * .64)
      } else {
        setWidth(550)
        setHeight(350)
      }
    }
    debouncedHandleResize()
    window.addEventListener('resize', debouncedHandleResize)
    return () =>
      window.removeEventListener('resize', debouncedHandleResize)
  });


  return (
    <ResizeContext.Provider value={{ width, height, windowWidth }}>
      {props.children}
    </ResizeContext.Provider>
  );
}

export default ResizeContextProvider;