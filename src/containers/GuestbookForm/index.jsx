import { useState } from 'react';

// Styled components
import Button from '../../styled/Button';
import Card from '../../styled/Card';
import Label from '../../styled/Label';
import Input from '../../styled/Input';
import Textarea from '../../styled/Textarea';

// Local Styled
import { Form, FormGroup, Subtitle, Title } from './styled';
import guestbook from '../../lib/api/guestbook';

function GuestbookForm() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  // request states
  const [state, setState] = useState({
    error: null,
    isLoading: false,
  });

  // form submit handlers
  const handleSubmitform = (e) => {
    e.preventDefault();
    // perform request
    setState({
      data: undefined,
      error: null,
      loading: true,
    });

    guestbook
      .postNewEntry(message, name)
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

  // form input handler
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeMessage = (e) => setMessage(e.target.value);

  return (
    <Card padding="16px" width="400px">
      <Title>Guest book</Title>
      <Subtitle>Send your best wishes for the bride</Subtitle>
      <Form onSubmit={handleSubmitform}>
        <FormGroup alignItems="center" justifyContent="space-between">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            onChange={handleChangeName}
            placeholder="Your name"
            type="text"
            value={name}
            width="280px"
          />
        </FormGroup>
        <FormGroup alignItems="flex-start" justifyContent="space-between">
          <Label htmlFor="message">Message</Label>
          <Textarea
            maxLength={280}
            name="message"
            onChange={handleChangeMessage}
            placeholder="Your wishes for the bride"
            value={message}
            width="280px"
          />
        </FormGroup>
        <Button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending . . . ' : 'Send'}
        </Button>
      </Form>
    </Card>
  );
}

export default GuestbookForm;
