import { NavbarContainer, NavItem, NavList } from './styled';

const { navlist } = require('./constants');

const Navbar = () => (
  <NavbarContainer>
    <NavList>
      {navlist.map(({ link, label }) => (
        <NavItem key={`nav-to-${link}`}>
          <a href={link}>{label}</a>
        </NavItem>
      ))}
    </NavList>
  </NavbarContainer>
);

export default Navbar;
