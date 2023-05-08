import { Outlet, useLocation } from 'react-router-dom';
import { Section, Header, NaviLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <Section>
      <Header>
        <nav>
          <NaviLink to="/" state={{ from: location }}>
            Home
          </NaviLink>
          <NaviLink to="/tempClass">Class</NaviLink>
          <NaviLink to="/tempHook">Hook</NaviLink>
          <NaviLink to="/imgFinder">ImgFinder</NaviLink>
        </nav>
      </Header>
      <Outlet />
    </Section>
  );
};
