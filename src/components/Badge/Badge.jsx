import React, { useEffect, useRef } from 'react';
import './Badge.scss';

const Badge = ({ name }) => {
  return <div className="badge">{name}</div>;
};

export default Badge;
