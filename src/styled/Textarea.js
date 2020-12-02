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

    :focus {
      border-color: ${colors.blue};
      color: ${colors.blue};
      transition: 100ms;
    }
  `
);

export default Textarea;
