import React, { useEffect, useContext, useRef } from 'react';
import './About.scss';
import CircleTitle from '../../components/CircleTitle/CircleTitle';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Badge from '../../components/Badge/Badge';
import Loader from 'react-loader-spinner';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

const About = () => {
  const { skills, technologies } = useContext(FirebaseContext);
  const textRefs = useRef([]);
  const techBadgeRefs = useRef([]);
  const skillBadgeRefs = useRef([]);
  const skillsDivRef = useRef([]);
  const techsDivRef = useRef([]);

  useEffect(() => {
    console.log(textRefs);
    textRefs.current.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        end: 'bottom 10%',
        onEnter: () => {
          gsap.fromTo(
            el,
            { top: '20px', autoAlpha: 0 },
            { top: 0, autoAlpha: 1, duration: 1 }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            el,
            { left: '0', autoAlpha: 1 },
            { left: '20px', autoAlpha: 0, duration: 1 }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            el,
            { left: '20px', autoAlpha: 0 },
            { left: 0, autoAlpha: 1, duration: 1 }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(
            el,
            { top: 0, autoAlpha: 1 },
            { top: '20px', autoAlpha: 0, duration: 1 }
          );
        },
      });
    });
  }, []);

  useEffect(() => {
    skillBadgeRefs.current.forEach((badge, index) => {
      gsap.fromTo(
        badge,
        {
          autoAlpha: 0,
          top: '20px',
        },
        {
          duration: 0.5,
          delay: `${index * 0.1}`,
          autoAlpha: 1,
          top: 0,
          ease: 'power4.inOut',
          scrollTrigger: {
            id: `skills-${index + 1}`,
            trigger: skillsDivRef.current,
            start: 'top 50%',
            toggleActions: 'play none none none',
            markers: true,
          },
        }
      );
    });
  }, [skills]);

  useEffect(() => {
    techBadgeRefs.current.forEach((badge, index) => {
      gsap.fromTo(
        badge,
        {
          autoAlpha: 0,
          top: '20px',
        },
        {
          duration: 0.5,
          delay: `${index * 0.1}`,
          autoAlpha: 1,
          top: 0,
          ease: 'power4.inOut',
          scrollTrigger: {
            id: `techs-${index + 1}`,
            trigger: techsDivRef.current,
            start: 'top 50%',
            toggleActions: 'play none none none',
            markers: true,
          },
        }
      );
    });
  }, [technologies]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [skills, technologies]);

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };
  const addToSkillsBadgeRefs = (el) => {
    if (el && !skillBadgeRefs.current.includes(el)) {
      skillBadgeRefs.current.push(el);
    }
  };
  const addToTechBadgeRefs = (el) => {
    if (el && !techBadgeRefs.current.includes(el)) {
      techBadgeRefs.current.push(el);
    }
  };

  return (
    <div className="About" id="about">
      <div className="title">
        <div className="title-content">
          <span className="q3">02. </span>
          about
        </div>
        <div className="title-line"></div>
      </div>
      <div className="flex">
        <CircleTitle num="02.01" title="Who am I?" />
        <div className="content mx-2">
          <p className="text-medium white" ref={addToTextRefs}>
            - I'm George, a software engineer, based in Thessaloniki, Greece.
          </p>
          <p className="text-medium white" ref={addToTextRefs}>
            - Graduate of the Electrical and Computer Engineering Department of
            the University of Thessaly
          </p>
          <p className="text-medium white" ref={addToTextRefs}>
            - I’m predominantly a Front-End Developer, but I am also interested
            at - and have some professional and hobbyist experience with - the
            Back-End.
          </p>
          <p className="text-medium white" ref={addToTextRefs}>
            - I enjoy creating websites and web apps and learning anything about
            the web and latest technology developments.
          </p>
          <p className="text-medium white" ref={addToTextRefs}>
            - I have professional experience as an AEM developer (a CMS written
            in Java), JQuery, Bootstrap and Parsley
          </p>
        </div>
      </div>
      <div className="flex">
        <CircleTitle num="02.02" title="Skills?" />
        <div className="content">
          <p className="text-medium white m-2" ref={addToTextRefs}>
            Some languages, libraries and technologies that I have worked with
            as a professional or as a hobbyist, (I'm not an expert by any
            means):
          </p>
          <div className="text-center" ref={skillsDivRef}>
            {skills ? (
              skills[0].skills.map((skill) => (
                <Badge name={skill} key={skill} ref={addToSkillsBadgeRefs} />
              ))
            ) : (
              <Loader
                type="ThreeDots"
                color="#00ffec"
                height="100"
                width="100"
                style={{ textAlign: 'center', margin: '10rem' }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex">
        <CircleTitle num="02.03" title="Toolset?" />
        <div className="content">
          <p className="text-medium white m-2" ref={addToTextRefs}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            earum expedita aperiam, voluptate, porro tempora suscipit recusandae
            quasi quis, praesentium labore culpa adipisci. Aspernatur quibusdam
            ut molestiae deserunt, quas nisi?
          </p>
          <p className="text-medium white m-2" ref={addToTextRefs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quod perspiciatis magni quam explicabo libero.{' '}
          </p>
          <div className="text-center" ref={techsDivRef}>
            {technologies ? (
              technologies[0].technologies.map((tech) => (
                <Badge name={tech} key={tech} ref={addToTechBadgeRefs} />
              ))
            ) : (
              <Loader
                type="ThreeDots"
                color="#00ffec"
                height="100"
                width="100"
                style={{ textAlign: 'center', margin: '10rem' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
