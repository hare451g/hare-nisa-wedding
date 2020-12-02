import styled, { css } from 'styled-components';
import Flex from '../../styled/Flex';

const HeroContainer = styled(Flex)`
  height: 50vh;
  padding: 0 16px;
  justify-content: flex-end;
`;

const HeroImage = styled.img`
  height: 50vh;
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
  ({ theme: { typography, colors } }) => css`
    font-family: ${typography.family.display};
    font-size: 42px;
    color: ${colors.white};
    font-weight: 700;
    width: 100%;
  `
);

export { HeroContainer, HeroImage, HeroSubtitle, HeroTitle };
