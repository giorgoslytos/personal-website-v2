import React, { useEffect, useState, useRef, useContext } from 'react';
import { ScrollContext } from '../../contexts/ScrollContext';
import { Pivot as Hamburger } from 'hamburger-react';
import './NavBar.scss';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

const NavBar = () => {
  const { scrollPos, navPos } = useContext(ScrollContext);
  const [isOpen, setOpen] = useState(false);
  const [navLocation, setNavLocation] = useState('home');

  const revealRefs = useRef([]);
  revealRefs.current = [];
  const headerRef = useRef();
  const rule = CSSRulePlugin.getRule('.active:after');

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

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      duration: 1.2,
      ease: 'none',
      delay: 0.8,
    });
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          top: '-20px',
          opacity: 0,
          visibility: 'hidden',
        },
        {
          duration: 1.2,
          opacity: 1,
          visibility: 'visible',
          top: '0px',
          ease: 'power4',
          delay: `${0.8 + index * 0.15}`,
        }
      );
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      rule,
      {
        width: '0%',
      },
      {
        width: '100%',
        delay: 3.8,
        duration: 0.8,
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <div
        ref={headerRef}
        className={`NavBar ${
          scrollPos !== 0 || isOpen === true ? 'shadow' : ''
        } ${navPos.now > navPos.pre ? 'hide' : ''}`}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} color="#00ffec" />
        <div className="text-large white">{}</div>
        <div className="menu">
          <a
            ref={addToRefs}
            href="#home"
            className={`menu-item h5 ${navLocation === 'home' ? 'active' : ''}`}
          >
            <span className="q3">01. </span>home
          </a>
          <a
            ref={addToRefs}
            href="#about"
            className={`menu-item h5 ${
              navLocation === 'about' ? 'active' : ''
            }`}
          >
            <span className="q3">02. </span>about
          </a>
          <a
            ref={addToRefs}
            href="#projects"
            className={`menu-item h5 ${
              navLocation === 'projects' ? 'active' : ''
            }`}
          >
            <span className="q3">03. </span>projects
          </a>
          <a
            ref={addToRefs}
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
