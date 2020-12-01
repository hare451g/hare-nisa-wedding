import baseTheme from './baseTheme';

const morningTheme = {
  ...baseTheme,
  color: {
    background: '#f3f2ef',
    foreground: '#333333',
  },
  typography: {
    ...baseTheme.typography,
    color: '#3f3f3f',
  },
};

export default morningTheme;
