import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: inline-flex;
  align-items: center;
  button {
    border-radius: 10px;
  }
  p {
    color: #fff;
    display: inline;
    margin-left: 15px;
  }
`;

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 버튼 클릭 시 호출되는 메서드
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  // 로그아웃 버튼 클릭 시 호출되는 메서드
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <StyledDiv>
      {isLoggedIn ? (
        <span>
          <button onClick={handleLogoutClick}>로그아웃</button>
          <p>환영합니다!</p>
        </span>
      ) : (
        <span>
          <button onClick={handleLoginClick}>로그인</button>
          <p>로그인 해주세요!</p>
        </span>
      )}
    </StyledDiv>
  );
}

export default LoginControl;
