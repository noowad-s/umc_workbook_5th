import "../index.css";
import styled from "styled-components";
import { useLocation, useParams } from 'react-router-dom'

// function MovieDetail({ data }) {
  // return (
  //   <DetailMovieBox>
  //     <DetailTitle>{data.title}</DetailTitle>
  //     <DetailContent>{data.overview}</DetailContent>
  //   </DetailMovieBox>
  // );
// }

function MovieDetail({data}) {
		//url로 넘겨 받은 title
    const { title } = useParams(); 
		
		//네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
		//이미지, 별점 등의 모든 정보들
    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
      <DetailMovieBox>
        <DetailTitle>{data.title}</DetailTitle>
        <DetailContent>{data.overview}</DetailContent>
      </DetailMovieBox>
    );
}

export default MovieDetail;

const DetailMovieBox = styled.div`
  justify-content: center;
  margin: 15px;
  height: 360px;
  position: absolute;
`;

const DetailTitle = styled.div`
  width: 200px;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
`;

const DetailContent = styled.div`
  width: 200px;
  color: white;
  font-size: 15px;
`;