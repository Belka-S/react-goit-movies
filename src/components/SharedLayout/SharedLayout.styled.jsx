import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  line-height: 1.3;
  background-color: #dbe4ed;

  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    padding-right: 34px;
    padding-left: 34px;
    // max-width: 700px;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 65px;
    padding-left: 65px;
    // max-width: 1150px;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: #dbe4ed;

  & nav {
    margin-left: auto;
  }
`;

export const NaviLink = styled(NavLink)`
  padding: 2px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: white;
    background-color: tomato;
  }

  /* &:global(.active) { } */
`;
