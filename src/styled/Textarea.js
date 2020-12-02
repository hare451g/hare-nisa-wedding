import styled, { css } from 'styled-components';

const Textarea = styled.textarea(
  ({ theme: { colors }, width }) => css`
    background-color: transparent;
    border: none;
    border-bottom: solid 2px;
    border-color: ${colors.gray};
    color: ${colors.gray};
    padding: 4px 0px;
    transition: 100ms;
    width: ${width || 'auto'};

    :active,
    :focus {
      border: none;
      border-bottom: solid 2px;
      border-color: ${colors.cta};
      color: ${colors.cta};
      transition: 100ms;
    }
  `
);

export default Textarea;
