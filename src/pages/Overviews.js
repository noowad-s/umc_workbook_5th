import React from 'react';
import './Movies.css';

function Overviews({ title, overview }) {
  return (
    <div className="overviews">
      <p>{title}</p>
      <p>{overview}</p>
    </div>
  );

}

export default Overviews;