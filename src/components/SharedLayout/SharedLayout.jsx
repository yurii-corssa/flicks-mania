import { Suspense } from 'react';
import {
  Container,
  Footer,
  GlobalStyle,
  Header,
  LogoWrapper,
  Main,
  NavLinkStyled,
  NavList,
  Text,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';
import { Loader } from 'components/Loader/Loader';

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
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer>
          <Text>© 2023 The Movie Search Engine</Text>
        </Footer>
      </Container>
    </>
  );
};

export default SharedLayout;
