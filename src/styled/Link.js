import styled, { css } from 'styled-components';

const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.blue};
    text-decoration: none;
    font-weight: 400;
    transition: 500ms;

    :hover {
      transition: 500ms;
      text-decoration: underline;
    }
  `
);

export default Link;
