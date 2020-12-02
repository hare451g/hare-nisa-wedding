import styled, { css } from 'styled-components';

const Label = styled.label(
  ({ theme: { colors } }) => css`
    color: ${colors.gray};
    transition: 500ms;
  `
);

export default Label;
