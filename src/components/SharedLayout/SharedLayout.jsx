import { Suspense } from 'react';
import { Container, GlobalStyle, Header } from './SharedLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="movies">Movies</NavLink>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
