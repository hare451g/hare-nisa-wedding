import { useEffect, useState } from 'react';

import guestbook from '../../lib/api/guestbook';
import Card from '../../styled/Card';

import GuestbookForm from '../GuestbookForm';

import { Container, Entry, MessageField, NameField, Title } from './styled';

function Guestbook() {
  // request states
  const [state, setState] = useState({
    data: [],
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    // perform request
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
  }, []);

  const entries = state.data.map(({ _id: id, date, name, message }) => (
    <Entry key={id}>
      <NameField>
        {name} - {date}
      </NameField>
      <MessageField>{message}</MessageField>
    </Entry>
  ));

  return (
    <Card margin="16px 8px">
      <Title>Guestbook</Title>
      <Container>
        {state.data.length > 0 ? entries : <p>No entries</p>}
      </Container>

      <GuestbookForm />
    </Card>
  );
}

export default Guestbook;
