import styled, { css } from 'styled-components';

const Card = styled.div(
  ({ theme: { colors }, height, margin, padding, width }) => css`
    background-color: ${colors.white};
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    height: ${height || 'auto'};
    margin: ${margin || 'auto'};
    padding: ${padding || 0};
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: ${width || 'auto'};

    :hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `
);

export default Card;
