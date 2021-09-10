import React from 'react';
import { Box } from 'theme-ui';
import Container from '../../components/container';
import { Fade } from 'react-awesome-reveal';

const MarketingCopy = ({ slice }) => {
  return (
    <Container>
      <Fade direction='up'>
        <Box
          sx={{
            borderTop: '5px solid black',
            borderBottom: '5px solid black',
            paddingTop: '40px',
            paddingBottom: '40px',
          }}>
          <Box as='p' sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
            {slice.primary.blurb}
          </Box>
          <Box sx={{ fontSize: ['18px', '48px'] }} as='p'>
            {slice.primary.copy}
          </Box>
        </Box>
      </Fade>
    </Container>
  );
};

export default MarketingCopy;
