import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
  ({ theme: { color, typography } }) => css`
    body {
      margin: 0;
      padding: 0;

      background-color: ${color.background};
    }

    * {
      box-sizing: border-box;
      color: ${typography.color};
      font-family: ${typography.family.primary};
      font-size: ${typography.size.medium};
      font-weight: 400;
    }
  `
);

export default GlobalStyles;
