import { Suspense } from 'react';
import {
  Container,
  Footer,
  GlobalStyle,
  Header,
  NavLinkStyled,
  NavList,
  Text,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <p>Flicks Mania</p>
          <nav>
            <NavList>
              <li>
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="movies">Movies</NavLinkStyled>
              </li>
            </NavList>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>© 2023 The Movie Search Engine</Text>
        </Footer>
      </Container>
    </>
  );
};

export default SharedLayout;
