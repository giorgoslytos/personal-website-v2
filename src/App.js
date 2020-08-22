import React from 'react';
import Typo from './Typo';
import ResizeContextProvider from './contexts/ResizeContext';
import FirebaseContextProvider from './contexts/FirebaseContext';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <ResizeContextProvider>
          <FirebaseContextProvider>
            <Home />
            <About />
            <Projects />
            <Contact />
          </FirebaseContextProvider>
        </ResizeContextProvider>


      </div>
    </div>
  );
}

export default App;
