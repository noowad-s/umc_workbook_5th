import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import LoginControl from './LoginControl';
import LoginButton from './LoginButton';

const HeaderStyle = styled.div`
    width: 1002px;
    background-color: #22254b;
    display: flex;
    align-items: center; 
    font-size: 15px;
    img {
        margin-left: 200px;
        margin-right: 15px;
    }
    `;

export const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        padding: 0;
    }
    li {
        margin-left: 15px;
        margin-right: 15px;
    }
    `;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: white;
    &:hover {
        color: gray;
    }
    `;

function Header() {
  return (
    <header>
     <HeaderStyle>
      <span className="logo">
      <NavLinkStyled to="/Home">
        <img
          style={{ width: '154px', height: '20px' }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        /></NavLinkStyled>
      </span>
      <Nav>
        <ul>
          <li>
            <NavLinkStyled to="/Movies">영화</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/TV">TV 프로그램</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/Celebrity">인물</NavLinkStyled>
          </li>
          <li>
            <LoginButton/>
          </li>
        </ul>
      </Nav>      
     </HeaderStyle>
    </header>
  );
}

export default Header;
