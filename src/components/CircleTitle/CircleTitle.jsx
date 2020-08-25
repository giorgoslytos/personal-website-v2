import React from 'react';
import './CircleTitle.scss';

const CircleTitle = ({ num, title }) => {
  return (
    <div className="circle-title">
      <span className="q2">{num}</span>
      <span className="h2">{title}</span>
      <div className="circle"></div>
    </div>
  );
};

export default CircleTitle;
