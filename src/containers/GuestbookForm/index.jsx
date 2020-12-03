import { useState } from 'react';

// Styled components
import Button from '../../styled/Button';
import Input from '../../styled/Input';
import Textarea from '../../styled/Textarea';

// Local Styled
import { Form, FormGroup, Subtitle } from './styled';
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
    <div>
      <Form onSubmit={handleSubmitform}>
        <Subtitle>Send your best wishes for the bride</Subtitle>
        <FormGroup alignItems="center" justifyContent="space-between">
          <Input
            name="name"
            onChange={handleChangeName}
            placeholder="Your name"
            type="text"
            value={name}
            width="100%"
          />
        </FormGroup>
        <FormGroup alignItems="flex-start" justifyContent="space-between">
          <Textarea
            maxLength={280}
            name="message"
            onChange={handleChangeMessage}
            placeholder="Your wishes for the bride"
            value={message}
            width="100%"
          />
        </FormGroup>
        <Button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending . . . ' : 'Send'}
        </Button>
      </Form>
    </div>
  );
}

export default GuestbookForm;
