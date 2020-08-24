import React, { useRef, useEffect } from 'react';
import ResizeContextProvider from './contexts/ResizeContext';
import FirebaseContextProvider from './contexts/FirebaseContext';
import ScrollContextProvider from './contexts/ScrollContext';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { gsap } from 'gsap';

function App() {
  const headerRef = useRef()
  useEffect(() => {
    gsap.from(headerRef.current,
      {
        autoAlpha: 0,
        backgroundColor: '#00ffec',
        opacity: 1,
        duration: 2,
        ease: 'power2',
      });
  }, []);
  return (
    <div className="App" id="home" ref={headerRef}>
      <FirebaseContextProvider>
        <ScrollContextProvider>
          <ResizeContextProvider>
            <NavBar />
            <div className="container">
              <Home />
              <About />
              <Projects />
              <Contact />
            </div>
          </ResizeContextProvider>
        </ScrollContextProvider>
      </FirebaseContextProvider>
    </div>
  );
}

export default App;
