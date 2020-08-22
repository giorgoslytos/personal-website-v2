import React, { useEffect } from 'react';
import './NavBar.scss';

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="NavBar">
      <a className="menu-item h5">
        <span className="q3">01. </span>home
      </a>
      <a className="menu-item h5">
        <span className="q3">02. </span>about
      </a>
      <a className="menu-item h5">
        <span className="q3">03. </span>projects
      </a>
      <a className="cta">
        <div className="q3">Contact</div>
      </a>
    </div>
  );
};

export default NavBar;
