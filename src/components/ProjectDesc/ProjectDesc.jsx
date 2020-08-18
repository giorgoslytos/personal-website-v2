import React from 'react';
import './ProjectDesc.scss';

const ProjectDesc = ({ text, align }) => {
  let alignment;
  switch (align) {
    case 'left':
      alignment = {
        textAlign: 'left',
        boxShadow: '4px 4px 10px 2px rgba(41, 62, 78, 0.6)',
      };
      break;
    case 'right':
      alignment = {
        textAlign: 'right',
        boxShadow: '-4px 4px 10px 2px rgba(41, 62, 78, 0.6)',
      };
      break;
    default:
      alignment = {
        textAlign: 'left',
        boxShadow: '4px 4px 10px 2px rgba(41, 62, 78, 0.6)',
      };
  }
  return (
    <div className="project-desc" style={alignment}>
      {text}
    </div>
  );
};

export default ProjectDesc;
