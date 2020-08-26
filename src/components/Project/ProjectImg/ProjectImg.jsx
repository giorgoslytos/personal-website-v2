import React, { useContext, useRef, useEffect } from 'react';
import './ProjectImg.scss';
import { ResizeContext } from '../../../contexts/ResizeContext';
import { gsapShorthand } from '../../../utils/gsapShorthand';

const ProjectImg = ({ align, img }) => {
  const { width, height } = useContext(ResizeContext);
  const ref = useRef();

  useEffect(() => {
    gsapShorthand(ref.current, 0.8, '-20px');
  }, []);
  return (
    <div
      className={
        align === 'right'
          ? 'project-img project-img-left'
          : 'project-img project-img-right'
      }
      style={{ backgroundImage: `url(${img})`, width }}
      ref={ref}
    ></div>
  );
};

export default ProjectImg;
