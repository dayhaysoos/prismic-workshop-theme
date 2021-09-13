import React from 'react';
import { Box, Flex, Image, Heading } from 'theme-ui';
import Container from '../../components/container';
import { Fade } from 'react-awesome-reveal';

/**
 * Step 6
 * This is what a component will look like when passing slice data to it from Prismic.
 *
 * Delete component below and uncomment the commented out code
 */

function OffsetHero() {
  return <h2>This is the OffSetHero slice.</h2>;
}

// function OffsetHero({ slice }) {
//   return (
//     <Container>
//       <Flex sx={{ justifyContent: 'space-between', marginBottom: '150px' }}>
//         <Fade direction='left'>
//           <Box sx={{ position: 'relative' }}>
//             <Image sx={{ width: '95%' }} src={slice.primary.image_1.url} />
//           </Box>
//         </Fade>
//         <Fade direction='right'>
//           <Box sx={{ position: 'relative', top: '80px' }}>
//             <Image sx={{ width: '95%' }} src={slice.primary.image_2.url} />
//           </Box>
//         </Fade>
//       </Flex>
//     </Container>
//   );
// }

export default OffsetHero;
