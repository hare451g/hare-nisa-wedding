import typography from './typography';
import colors from './colors';

const morningTheme = {
  colors: {
    ...colors,
    background: colors.gray6,
    foreground: colors.darkGray3,
    card: colors.gray5,
    cta: colors.blue,
  },
  typography: {
    ...typography,
    color: colors.darkGray3,
  },
};

export default morningTheme;
