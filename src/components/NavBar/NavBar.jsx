import React, { useEffect, useState, useRef, useContext } from 'react';
import { ScrollContext } from '../../contexts/ScrollContext';
import { Pivot as Hamburger } from 'hamburger-react';
import './NavBar.scss';

const NavBar = () => {
  const { scrollPos, navPos } = useContext(ScrollContext);
  const [isOpen, setOpen] = useState(false);
  const [navLocation, setNavLocation] = useState('home');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  useEffect(() => {
    const handleNav = () => {
      setNavLocation(window.location.hash.slice(1));
    };

    window.addEventListener('hashchange', handleNav);
    return () => window.removeEventListener('hashchange', handleNav);
  });

  return (
    <>
      <div
        className={`NavBar ${
          scrollPos !== 0 || isOpen === true ? 'shadow' : ''
        } ${navPos.now > navPos.pre ? 'hide' : ''}`}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} color="#00ffec" />

        <div className="text-large white">{}</div>
        <div className="menu">
          <a
            href="#home"
            className={`menu-item h5 ${navLocation === 'home' ? 'active' : ''}`}
          >
            <span className="q3">01. </span>home
          </a>
          <a
            href="#about"
            className={`menu-item h5 ${
              navLocation === 'about' ? 'active' : ''
            }`}
          >
            <span className="q3">02. </span>about
          </a>
          <a
            href="#projects"
            className={`menu-item h5 ${
              navLocation === 'projects' ? 'active' : ''
            }`}
          >
            <span className="q3">03. </span>projects
          </a>
          <a
            href="#contact"
            className="cta"
            className={`cta ${navLocation === 'contact' ? 'cta-active' : ''}`}
          >
            <div className="q3">Contact</div>
          </a>
        </div>
      </div>
      <div
        className="menu-mobile"
        style={{ transform: isOpen ? 'translateY(0%)' : 'translateY(100%)' }}
      >
        <a
          href="#home"
          className={`menu-item h5 ${navLocation === 'home' ? 'active' : ''}`}
          onClick={() => setOpen(false)}
        >
          <span className="q3">01. </span>home
        </a>
        <a
          href="#about"
          className={`menu-item h5 ${navLocation === 'about' ? 'active' : ''}`}
          onClick={() => setOpen(false)}
        >
          <span className="q3">02. </span>about
        </a>
        <a
          href="#projects"
          onClick={() => setOpen(false)}
          className={`menu-item h5 ${
            navLocation === 'projects' ? 'active' : ''
          }`}
        >
          <span className="q3">03. </span>projects
        </a>

        <a
          href="#contact"
          className={`cta ${navLocation === 'contact' ? 'cta-active' : ''}`}
          onClick={() => setOpen(false)}
        >
          <div className="q3">Contact</div>
        </a>
      </div>
    </>
  );
};

export default NavBar;
