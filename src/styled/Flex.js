import styled, { css } from 'styled-components';

const Flex = styled.div(
  ({ alignItems, direction, justifyContent, margin, padding }) => css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
    margin: ${margin || 'auto'};
    padding: ${padding || 'auto'};
  `
);

export default Flex;
