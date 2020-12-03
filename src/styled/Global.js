import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
  ({ theme: { colors, typography } }) => css`
    body {
      margin: 0;
      padding: 0;
      background-color: ${colors.background};
    }

    img {
      border-radius: 4px;

      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
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
