import styled, { css } from 'styled-components';
import Flex from '../../styled/Flex';

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px 16px;
`;

const EventContainer = styled.div(
  ({ theme: { colors } }) => css`
    border-bottom: solid 1px ${colors.card};
  `
);

const LiveLogo = styled.img`
  border-radius: 30px;
`;

const Time = styled.p(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.monospace};
  `
);

const Title = styled.h1(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.display};
    font-size: ${typography.size.large};
  `
);

export { Container, EventContainer, LiveLogo, Time, Title };
