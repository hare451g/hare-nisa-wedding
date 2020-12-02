import colors from './colors';
import typography from './typography';

const noonTheme = {
  colors: {
    ...colors,
    background: colors.gray6,
    foreground: colors.darkGray5,
    card: colors.gray5,
    cta: colors.pink,
  },
  typography: {
    ...typography,
    color: colors.darkGray5,
  },
};

export default noonTheme;
