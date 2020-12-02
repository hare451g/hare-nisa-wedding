import typography from './typography';
import colors from './colors';

const nightTheme = {
  colors: {
    ...colors,
    background: colors.darkGray6,
    foreground: colors.gray5,
  },
  typography: {
    ...typography,
    color: colors.gray5,
    cta: colors.blue,
  },
};

export default nightTheme;
