import styled from 'styled-components';

const { NavLink } = require('react-router-dom');

const Header = () => {
  return (
    <header>
      <NavStyled>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/movies">Movies</Navlink>
      </NavStyled>
    </header>
  );
};

export default Header;

const Navlink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: gray;
  &.active{
    color: tomato;
  }
`;

const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  & < .active {
    color: tomato;
  }
`;
