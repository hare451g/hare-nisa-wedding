import typography from './typography';
import colors from './colors';

const morningTheme = {
  colors: {
    ...colors,
    background: colors.gray6,
    foreground: colors.darkGray3,
  },
  typography: {
    ...typography,
    color: colors.darkGray3,
    cta: colors.blue,
  },
};

export default morningTheme;
