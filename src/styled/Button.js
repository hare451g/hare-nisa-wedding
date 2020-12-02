import styled, { css } from 'styled-components';

const Button = styled.button(
  ({ theme: { colors } }) => css`
    background-color: ${colors.foreground};
    border: none;
    border-radius: 4px;
    color: ${colors.background};
    cursor: pointer;
    padding: 4px 16px;
  `
);

export default Button;
