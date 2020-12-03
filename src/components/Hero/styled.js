import styled, { css } from 'styled-components';
import Flex from '../../styled/Flex';

const HeroContainer = styled(Flex)`
  height: 30vh;
  padding: 0 16px;
  justify-content: flex-end;
`;

const HeroImage = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;
`;

const HeroSubtitle = styled.p(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.primary};
    font-size: ${typography.size.medium};
    width: 100%;
  `
);

const HeroTitle = styled.h1(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.display};
    font-size: 42px;
    font-weight: 700;
    width: 100%;
  `
);

const NavbarContainer = styled(Flex)`
  width: 100%;
  height: 10vh;
`;

const NavItem = styled.li(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.monospace};
    list-style-type: none;
    a {
      text-decoration: none;
    }
  `
);

const NavList = styled.ul`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;

  li {
    display: inline;
  }
`;

export {
  HeroContainer,
  HeroImage,
  HeroSubtitle,
  HeroTitle,
  NavbarContainer,
  NavItem,
  NavList,
};
