import baseTheme from './baseTheme';

const nightTheme = {
  ...baseTheme,
  color: {
    background: '#333333',
    foreground: '#f3f3f3',
  },
  typography: {
    ...baseTheme.typography,
    color: '#f4f4f4',
  },
};

export default nightTheme;
