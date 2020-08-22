import React, { useState, useContext } from 'react';
import './ProjectImg.scss';
import { ResizeContext } from '../../../contexts/ResizeContext';

const ProjectImg = ({ align, img }) => {
  const { width, height } = useContext(ResizeContext);

  return (
    <div
      className={
        align === 'right'
          ? 'project-img project-img-left'
          : 'project-img project-img-right'
      }
      style={{ backgroundImage: `url(${img})`, width }}
    ></div>
  );
};

export default ProjectImg;
