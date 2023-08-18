import { Suspense } from 'react';
import {
  Container,
  Footer,
  GlobalStyle,
  Header,
  LogoWrapper,
  NavLinkStyled,
  NavList,
  Text,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <LogoWrapper>
            <MovieFilterRoundedIcon sx={{ fontSize: 40 }} />
            <p>Flicks Mania</p>
          </LogoWrapper>
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
