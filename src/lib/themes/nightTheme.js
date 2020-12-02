import typography from './typography';
import colors from './colors';

const nightTheme = {
  colors: {
    ...colors,
    background: colors.darkGray6,
    foreground: colors.gray5,
    card: colors.darkGray5,
    cta: colors.pink,
  },
  typography: {
    ...typography,
    color: colors.gray5,
  },
};

export default nightTheme;
