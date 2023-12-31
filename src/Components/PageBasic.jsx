import React, { useState } from 'react';
import './PageBasic.css';
import Overview from './Overview';

function Movie({data,props}) {
  const [isOverviewVisible, setOverviewVisible] = useState(false);

  const handleMouseEnter = () => {
    setOverviewVisible(true);
  }

  const handleMouseLeave = () => {
    setOverviewVisible(false);
  }

  return (
    <div className='moviesForm'>
    <span className='moviesWrap' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>
          <img className='poster' src={data.poster_path} alt={data.title} />
          <div>
          <div className='moviesTitle'>
           <p>{data.title} {data.vote_average}</p>
        </div>
          {isOverviewVisible && <Overview title={data.title} overview={data.overview} />}
          </div>
        </div>
    </span>
    </div>
  );
}

export default Movie;