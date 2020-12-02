import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

// theme
import noonTheme from '../../lib/themes/noonTheme';

// utils
import timeChecker from '../../lib/timeChecker';

// components
import Hero from '../../components/Hero';

// Styled components
import Container from '../../styled/Container';
import GlobalStyles from '../../styled/Global';

// containers
import GuestbookForm from '../GuestbookForm';

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
      <Container>
        <Hero />
        <GuestbookForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
