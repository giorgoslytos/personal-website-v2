import React from 'react';
import ResizeContextProvider from './contexts/ResizeContext';
import FirebaseContextProvider from './contexts/FirebaseContext';
import ScrollContextProvider from './contexts/ScrollContext';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App" id="home">
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
