import React from 'react';
import './Badge.scss';

const Badge = React.forwardRef(({ name }, ref) => {
  return (
    <div className="badge" ref={ref}>
      {name}
    </div>
  );
});

export default Badge;
