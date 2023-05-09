import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DivWrap, Header, NaviLink } from './Layout.styled';

export const Layout = () => {
  return (
    <DivWrap>
      <Header>
        <nav>
          <NaviLink to="/">Home</NaviLink>
          <NaviLink to="/movies">Movies</NaviLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DivWrap>
  );
};
