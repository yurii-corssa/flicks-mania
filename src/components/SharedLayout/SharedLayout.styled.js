import { createGlobalStyle, styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
 



* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Albert Sans', 'Albert Sans Placeholder', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

img{
  display: block;
}

section{padding: 100px 100px 100px 100px;}

`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px 20px 100px;
  color: #f1faee;
  background-color: #1d3557;
  & p {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  height: 40px;
  padding: 10px 20px 10px 20px;
  &.active {
    border-radius: 100px;
    border: 1px solid #f1faee;
  }
`;

export const Main = styled.main`
  background-color: #e63946;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 100px 100px 100px;
  background-color: #000000;
`;

export const Text = styled.p`
  color: #a8dadc;
  line-height: 1.5;
  text-align: center;
`;
