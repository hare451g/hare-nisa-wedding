import { useEffect, useState } from 'react';

import guestbook from '../../lib/api/guestbook';
import Card from '../../styled/Card';

import GuestbookForm from '../GuestbookForm';

import {
  Container,
  DateField,
  Entry,
  MessageField,
  NameField,
  Title,
} from './styled';

function Guestbook() {
  // request states
  const [state, setState] = useState({
    data: [],
    error: null,
    isLoading: false,
  });

  const getEntries = () => {
    setState({
      data: [],
      error: null,
      loading: true,
    });

    guestbook
      .getEntries()
      .then((response) => {
        setState({
          data: response.data.data,
          error: null,
          loading: false,
        });
      })
      .catch((error) => {
        setState({
          data: [],
          error: error.message || error,
          loading: false,
        });
      });
  };

  useEffect(() => {
    // perform request
    getEntries();
  }, []);

  const composeDate = (date) => {
    const raw = new Date(date);
    const dateOnly = `${raw.getDate()}/${raw.getMonth()}/${raw.getFullYear()}`;
    const time = `${raw.getHours()}:${raw.getMinutes()}`;
    return `${dateOnly} - ${time}`;
  };

  const entries = state.data.map(({ _id: id, date, name, message }) => (
    <Entry key={id}>
      <NameField>{name}</NameField>
      <MessageField>{message}</MessageField>
      <DateField>{composeDate(date)}</DateField>
    </Entry>
  ));

  return (
    <Card margin="16px 8px">
      <Title>Guestbook</Title>
      <Container>
        {state.data.length > 0 ? entries : <p>No entries</p>}
      </Container>

      <GuestbookForm afterSubmit={getEntries} />
    </Card>
  );
}

export default Guestbook;
