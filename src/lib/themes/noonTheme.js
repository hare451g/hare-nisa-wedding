import colors from './colors';
import typography from './typography';

const noonTheme = {
  colors: {
    ...colors,
    background: colors.gray6,
    foreground: colors.darkGray5,
  },
  typography: {
    ...typography,
    color: colors.darkGray5,
    cta: colors.blue,
  },
};

export default noonTheme;
