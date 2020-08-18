import React, { useState } from 'react';
import './ProjectImg.scss';

const ProjectImg = ({ align, img }) => {
  const backImg = require(`../../images/${img}`);
  const [hover, setHover] = useState(false);
  const transparentImg = {
    backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url(${backImg})`,
  };
  const coloredImg = {
    backgroundImage: `linear-gradient(0deg,rgba(0, 255, 236, 0.25),rgba(0, 255, 236, 0.25)),url(${backImg})`,
  };
  const imgStyle = hover ? transparentImg : coloredImg;
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={align === 'right' ? 'project-img-left' : 'project-img-right'}
      style={imgStyle}
    ></div>
  );
};

export default ProjectImg;
