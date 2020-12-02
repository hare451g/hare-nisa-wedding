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
import Link from '../../styled/Link';

function App() {
  const time = timeChecker();
  const [theme, setTheme] = useState(noonTheme);

  useEffect(() => {
    setTheme(themeMap[time]);
  }, [time]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Link href="/">Welcome to altered future</Link>
    </ThemeProvider>
  );
}

export default App;
