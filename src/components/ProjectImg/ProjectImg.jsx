import React, { useState, useContext } from 'react';
import './ProjectImg.scss';
import { ResizeContext } from '../../contexts/ResizeContext';

const ProjectImg = ({ align, img }) => {
  const { width, height } = useContext(ResizeContext);
  const backImg = require(`../../images/${img}`);

  return (
    <div
      className={align === 'right' ? 'project-img-left' : 'project-img-right'}
      style={{ backgroundImage: `url(${backImg})` }}
    ></div>
  );
};

export default ProjectImg;
