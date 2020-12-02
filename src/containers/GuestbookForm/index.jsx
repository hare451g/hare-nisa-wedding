import { useState } from 'react';

import Button from '../../styled/Button';
import Card from '../../styled/Card';
import Label from '../../styled/Label';
import Input from '../../styled/Input';
import Textarea from '../../styled/Textarea';

import { Form, FormGroup, Subtitle, Title } from './styled';

function GuestbookForm() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeMessage = (e) => setMessage(e.target.value);

  return (
    <Card padding="16px" width="400px">
      <Title>Guest book</Title>
      <Subtitle>Send your best wishes for the bride</Subtitle>
      <Form>
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
        <Button type="submit">Send</Button>
      </Form>
    </Card>
  );
}

export default GuestbookForm;
