import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

// theme
import noonTheme from '../../lib/themes/noonTheme';

// utils
import timeChecker from '../../lib/timeChecker';

// Styled components
import GlobalStyles from '../../styled/Global';

// utils
import { themeMap } from './utils';

function App() {
  const time = timeChecker();
  const [theme, setTheme] = useState(noonTheme);

  useEffect(() => {
    setTheme(themeMap[time]);
  }, [time]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>It's already {time}</div>
    </ThemeProvider>
  );
}

export default App;
