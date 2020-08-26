import React, { useContext, useEffect, useRef } from 'react';
import './ProjectDesc.scss';
import { ResizeContext } from '../../../contexts/ResizeContext';
import { gsapShorthand } from '../../../utils/gsapShorthand';

const ProjectDesc = ({ text, align }) => {
  const { width } = useContext(ResizeContext);
  const ref = useRef();
  let alignment;
  switch (align) {
    case 'left':
      alignment = {
        textAlign: 'left',
        boxShadow: '4px 4px 10px 2px rgba(41, 62, 78, 0.6)',
        width,
      };
      break;
    case 'right':
      alignment = {
        textAlign: 'right',
        boxShadow: '-4px 4px 10px 2px rgba(41, 62, 78, 0.6)',
        width,
      };
      break;
    default:
      alignment = {
        textAlign: 'left',
        boxShadow: '4px 4px 10px 2px rgba(41, 62, 78, 0.6)',
        width,
      };
  }
  useEffect(() => {
    gsapShorthand(ref.current, 0.8, '20px');
  }, []);
  return (
    <div className="project-desc" style={alignment} ref={ref}>
      <p className="text-small white">{text}</p>
    </div>
  );
};

export default ProjectDesc;
