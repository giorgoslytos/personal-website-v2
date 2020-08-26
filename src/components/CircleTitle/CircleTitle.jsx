import React, { useEffect, useRef } from 'react';
import './CircleTitle.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CircleTitle = ({ num, title }) => {
  const circleRef = useRef();
  useEffect(() => {
    gsap.from(circleRef.current, {
      autoAlpha: 0,
      width: 0,
      height: 0,
      duration: 1.2,
      ease: 'elastic',
      scrollTrigger: {
        id: `${num}`,
        trigger: circleRef.current,
        start: 'top center+=20%',
        toggleActions: 'play pause resume pause',
      },
    });
  }, []);
  return (
    <div className="circle-title">
      <span className="q2">{num}</span>
      <span className="h2">{title}</span>
      <div className="circle" ref={circleRef}></div>
    </div>
  );
};

export default CircleTitle;
