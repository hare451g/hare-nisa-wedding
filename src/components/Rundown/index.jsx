import { events } from './constants';
import { Container, LiveLogo, RundownContainer, Title } from './styled';
import Event from './Event';

import igLogo from '../../assets/ig_logo.svg';

const Rundown = () => (
  <Container>
    <Title>Event</Title>
    <p>
      Saturday, 5<sup>th</sup> December 2020
    </p>
    <LiveLogo alt="instagram logo" src={igLogo} />
    <h3>Live from Kediaman Bapak Ichwani</h3>
    <RundownContainer>
      {events.map(({ startTime, endTime, descriptions }, index) => (
        <Event
          key={`rundown-event-${index + 1}`}
          startTime={startTime}
          endTime={endTime}
          descriptions={descriptions}
        />
      ))}
    </RundownContainer>
  </Container>
);

export default Rundown;
