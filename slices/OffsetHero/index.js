import React from 'react';
import { Box, Flex, Image, Heading } from 'theme-ui';
import Container from '../../components/container';
import { Fade } from 'react-awesome-reveal';

function OffsetHero({ slice }) {
  return (
    <Container>
      <Flex sx={{ justifyContent: 'space-between', marginBottom: '150px' }}>
        <Fade direction='left'>
          <Box sx={{ position: 'relative' }}>
            <Image sx={{ width: '95%' }} src={slice.primary.image_1.url} />
          </Box>
        </Fade>
        <Fade direction='right'>
          <Box sx={{ position: 'relative', top: '80px' }}>
            <Image sx={{ width: '95%' }} src={slice.primary.image_2.url} />
          </Box>
        </Fade>
      </Flex>
    </Container>
  );
}

export default OffsetHero;
