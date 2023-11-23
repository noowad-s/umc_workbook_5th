import styled from "styled-components";
import Page from "../Components/PageBasic";
import { movies } from "../movieDummy"
import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Movies() {
  // const navigate = useNavigate();

  // const handleMovieClick = (movieId) => {
  //   // 클릭된 영화의 ID를 기반으로 MovieDetail 페이지로 이동
  //   navigate(`/movie/${movieId}`);
  // };

  return (
    <MoviesWrap>
    {movies.results.map((item) => {
      return <Page data={item} />;
    })}

    {/* <ul>
      {movies.results.map((item) => (
        <li key={movies.id} onClick={() => handleMovieClick(movies.id)}>
          {movies.title}
        </li>
      ))}
    </ul> */}
  </MoviesWrap>
  );
}

export default Movies;

const MoviesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;