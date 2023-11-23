import React from 'react';
import './PageBasic';

function Overview({ title, overview }) {
  return (
    <div className="overview">
      <p>{title}</p>
      <p>{overview}</p>
    </div>
  );

}

export default Overview;