import styled, { css } from 'styled-components';

const Input = styled.input(
  ({ theme: { colors }, width }) => css`
    background-color: transparent;
    border: none;
    border-bottom: solid 2px;
    border-color: ${colors.gray};
    color: ${colors.gray};
    padding: 4px 0px;
    transition: 500ms;

    width: ${width || 'auto'};

    :focus {
      border-color: ${colors.cta};
      color: ${colors.cta};
      transition: 500ms;
    }
  `
);

export default Input;
