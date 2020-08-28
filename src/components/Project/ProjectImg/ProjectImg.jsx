import React, { useContext, useRef, useEffect } from 'react';
import './ProjectImg.scss';
import { ResizeContext } from '../../../contexts/ResizeContext';
import { gsapShorthand } from '../../../utils/gsapShorthand';

const ProjectImg = ({ align, img }) => {
  const { width, height } = useContext(ResizeContext);
  const ref = useRef();
  const bordersRef = useRef();

  useEffect(() => {
    gsapShorthand(ref.current, 1.2, '-30px');
    gsapShorthand(bordersRef.current, 0.5, '0', 0.8);
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
    >
      <div className="borders" ref={bordersRef}></div>
    </div>
  );
};

export default ProjectImg;
