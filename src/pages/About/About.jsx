import React, { useEffect, useContext } from 'react';
import './About.scss';
import CircleTitle from '../../components/CircleTitle/CircleTitle';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Badge from '../../components/Badge/Badge';
import Loader from 'react-loader-spinner';

const About = () => {
  const { skills, technologies } = useContext(FirebaseContext);
  useEffect(() => {
    console.log(skills ? skills[0].skills : 'waiting');
    console.log(technologies);
  });
  return (
    <div className="About">
      <div className="title">
        <div className="title-content">
          <span className="q3">02. </span>
          about
        </div>
        <div className="title-line"></div>
      </div>
      <div className="flex">
        <CircleTitle num="01.01" title="Who am I?" />
        <div className="content mx-2">
          <p className="text-medium white">
            - I'm George, a software engineer, based in Thessaloniki, Greece.
          </p>
          <p className="text-medium white">
            - Graduate of the Electrical and Computer Engineering Department of
            the University of Thessaly
          </p>
          <p className="text-medium white">
            - I’m predominantly a Front-End Developer, but I am also interested
            at - and have some professional and hobbyist experience with - the
            Back-End.
          </p>
          <p className="text-medium white">
            - I enjoy creating websites and web apps and learning anything about
            the web and latest technology developments.
          </p>
          <p className="text-medium white">
            - I have professional experience as AEM developer (a CMS written in
            Java), JQuery, Bootstrap and Parsley
          </p>
        </div>
      </div>
      <div className="flex">
        <CircleTitle num="01.01" title="Skills?" />
        <div className="content">
          <p className="text-medium white m-2">
            Some languages, libraries and technologies that I have worked with
            as a professional or as a hobbyist, (I'm not an expert by any
            means):
          </p>
          <div className="text-center">
            {skills ? (
              skills[0].skills.map((skill) => (
                <Badge name={skill} key={skill} />
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
        <CircleTitle num="01.01" title="Toolset?" />
        <div className="content">
          <p className="text-medium white m-2">
            I know that this subsection doesn't really have any meaning, but why
            not include it when I know it make my website appear bigger? ;). It
            is also a great conversation starter!
          </p>
          <p className="text-medium white m-2">
            I use the following tools to assist me in web development:
          </p>
          <div className="text-center">
            {technologies ? (
              technologies[0].technologies.map((tech) => (
                <Badge name={tech} key={tech} />
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
