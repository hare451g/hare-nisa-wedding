import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import 'react-bnb-gallery/dist/style.css';

// theme
import noonTheme from '../../lib/themes/noonTheme';

// utils
import timeChecker, { TIME_KEYS } from '../../lib/timeChecker';

// components
import Hero from '../../components/Hero';

// Styled components
import Container from '../../styled/Container';
import GlobalStyles from '../../styled/Global';

import Rundown from '../../components/Rundown';
import Gallery from '../../components/Gallery';

// containers
import Guestbook from '../Guestbook';

// utils
import { themeMap } from './utils';

function App() {
  const time = timeChecker() || TIME_KEYS.MORNING;
  const [theme, setTheme] = useState(noonTheme);

  console.log('time', time);

  useEffect(() => {
    setTheme(themeMap[time]);
  }, [time]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <section id="hero">
          <Hero time={time} />
        </section>
        <section id="gallery">
          <Gallery time={time} />
        </section>
        <section id="rundown">
          <Rundown />
        </section>
        <section id="guestbook-form">
          <Guestbook />
        </section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
