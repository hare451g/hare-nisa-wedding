import { events } from './constants';
import { Container, Title } from './styled';
import Event from './Event';

const Rundown = () => (
  <Container>
    <Title>Rundown</Title>
    <div>
      {events.map(({ startTime, endTime, descriptions }, index) => (
        <Event
          key={`rundown-event-${index + 1}`}
          startTime={startTime}
          endTime={endTime}
          descriptions={descriptions}
        />
      ))}
    </div>
  </Container>
);

export default Rundown;
