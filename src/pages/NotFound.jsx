import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  color: #ff0000;
  background-color: #fff;
`;

function NotFound() {
  const navigate = useNavigate();

  // 메인 페이지로 이동하는 함수
  const navigateToMainPage = () => {
    navigate('/Home');
  };

  return (
    <div>
      <h2>해당 페이지를 찾을 수 없습니다.</h2>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <StyledButton onClick={navigateToMainPage}>메인 페이지로 이동</StyledButton>
    </div>
  );
}

export default NotFound;
