import React, { useEffect, useRef, useState, useContext } from 'react';
import './CircleTitle.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ResizeContext } from '../../contexts/ResizeContext';

gsap.registerPlugin(ScrollTrigger);

const CircleTitle = ({ num, title }) => {
  const circleRef = useRef();
  const { windowWidth } = useContext(ResizeContext);
  const [responsiveWidth, setResponsiveWidth] = useState();
  useEffect(() => {
    let tmpWidth = windowWidth > 800 ? 250 : 150;
    if (tmpWidth !== responsiveWidth) {
      setResponsiveWidth(tmpWidth);
    }
  }, [windowWidth, responsiveWidth]);
  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      {
        autoAlpha: 0,
        width: 0,
        height: 0,
      },
      {
        duration: 1.2,
        width: responsiveWidth,
        height: responsiveWidth,
        ease: 'elastic',
        autoAlpha: 1,
        scrollTrigger: {
          id: `${num}`,
          trigger: circleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [responsiveWidth, num]);
  return (
    <div className="circle-title">
      <span className="q2">{num}</span>
      <span className="h2">{title}</span>
      <div className="circle" ref={circleRef}></div>
    </div>
  );
};

export default CircleTitle;
