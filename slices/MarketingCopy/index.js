import React from 'react';
import { Box } from 'theme-ui';
import Container from '../../components/container';
import { Fade } from 'react-awesome-reveal';

/**
 * Step 5
 * This is what a component will look like when passing slice data to it from Prismic.
 *
 * Delete component below and uncomment the commented out code
 */

function MarketingCopy() {
  return <h2>This is the MarketingCopy slice.</h2>;
}

// const MarketingCopy = ({ slice }) => {
//   return (
//     <Container>
//       <Fade direction='up'>
//         <Box
//           sx={{
//             borderTop: '5px solid black',
//             borderBottom: '5px solid black',
//             paddingTop: '40px',
//             paddingBottom: '40px',
//           }}>
//           <Box as='p' sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
//             {slice.primary.blurb}
//           </Box>
//           <Box sx={{ fontSize: ['18px', '48px'] }} as='p'>
//             {slice.primary.copy}
//           </Box>
//         </Box>
//       </Fade>
//     </Container>
//   );
// };

export default MarketingCopy;
