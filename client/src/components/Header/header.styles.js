import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 75px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000111;
  border-bottom: 1px solid rgba(223, 223, 223, 0.45);
  z-index: 100;
`;

export const Logo = styled.img`
  width: 200px;
  max-height: 60px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Item = styled(NavLink)`
  position: relative;
  min-width: 100px;
  text-align: center;
  color: #ffffff;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #00bcd4;
  }

  &.active {
    color: #00bcd4;
  }
`;

export const Item__Link = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
