
import React, { createContext, useState, useEffect } from 'react';
import { handleResize } from '../utils/handleDebouncedResize';

export const ResizeContext = createContext();

const ResizeContextProvider = (props) => {
  const [height, setHeight] = useState(350);
  const [width, setWidth] = useState(550);
  // useEffect(() => {
  //   const handleDebouncedResize = handleResize(
  //     (() => {
  //       setTimeout(() => {
  //         console.log(window.innerHeight)
  //         console.log(window.innerWidth)
  //       }, 1000);
  //     })()
  //   );
  //   window.addEventListener('resize', handleDebouncedResize);

  //   return () => {
  //     window.removeEventListener('resize', handleDebouncedResize);
  //   };
  // });

  return (
    <ResizeContext.Provider value={{ width, height }}>
      {props.children}
    </ResizeContext.Provider>
  );
}

export default ResizeContextProvider;