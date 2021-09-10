import React from 'react';
import { Box, Container, Flex, Heading } from 'theme-ui';

const UL = (props) => {
  return <Box sx={{ paddingLeft: 0 }} as='ul' {...props} />;
};

const ListItem = (props) => {
  return (
    <Box sx={{ listStyle: 'none', marginBottom: '12px' }} as='li' {...props} />
  );
};

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        height: '320px',
        paddingTop: '80px',
      }}
      as='footer'>
      <Container sx={{ color: 'white' }}>
        <Flex sx={{ justifyContent: 'space-between', width: '400px' }}>
          <Box>
            <Heading color='white' as='h5'>
              Help
            </Heading>
            <UL>
              <ListItem>FAQ</ListItem>
              <ListItem>Contact Us</ListItem>
              <ListItem>Shipments</ListItem>
            </UL>
          </Box>
          <Box>
            <Heading color='white' as='h5'>
              Legal Info
            </Heading>
            <UL>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms & Conditions</ListItem>
              <ListItem>Cookie Policy</ListItem>
            </UL>
          </Box>

          <Box>
            <Heading color='white' as='h5'>
              Follow Us
            </Heading>
            <UL>
              <ListItem>Instagram</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Facebook</ListItem>
            </UL>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
