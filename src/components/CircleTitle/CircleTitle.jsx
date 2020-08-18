import React from 'react';
import './CircleTitle.scss';

const CircleTitle = ({ num, title, align }) => {
  return (
    <div className="circle-title" style={{ textAlign: align }}>
      <span className="q2">{num}</span>
      <span className="h2">{title}</span>
    </div>
  );
};

export default CircleTitle;
