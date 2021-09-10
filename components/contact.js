import React from 'react';
import { Input, Container, Textarea, Box, Button } from 'theme-ui';

function Contact() {
  return (
    <Container p={4}>
      <h2>Have questions?</h2>
      <Box
        sx={{ width: '480px' }}
        as='form'
        method='POST'
        name='contact-form'
        data-netlify='true'>
        <label name='name'>Name</label>
        <p>
          <Input type='text' name='name' />
        </p>
        <label name='email'>Email</label>
        <p>
          <Input type='email' name='email' />
        </p>
        <label name='message'>Message</label>
        <p>
          <Textarea name='message' rows={8} />
        </p>
        <p>
          <Button type='submit'>Send</Button>
        </p>
      </Box>
    </Container>
  );
}

export default Contact;
