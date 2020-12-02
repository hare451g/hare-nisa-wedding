import { EventContainer, Time } from './styled';

const Event = ({ startTime, endTime, descriptions }) => (
  <EventContainer>
    <Time>
      {startTime} - {endTime}
    </Time>
    <p>{descriptions}</p>
  </EventContainer>
);

export default Event;
