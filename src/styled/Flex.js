import styled, { css } from 'styled-components';

const Flex = styled.div(
  ({ direction, justifyContent, alignItems }) => css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
  `
);

export default Flex;
