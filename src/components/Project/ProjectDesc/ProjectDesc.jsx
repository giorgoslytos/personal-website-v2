import React, { useContext } from 'react';
import './ProjectDesc.scss';
import { ResizeContext } from '../../../contexts/ResizeContext';

const ProjectDesc = ({ text, align }) => {
  const { width } = useContext(ResizeContext);
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
  return (
    <div className="project-desc" style={alignment}>
      <p className="text-small white">{text}</p>
    </div>
  );
};

export default ProjectDesc;
