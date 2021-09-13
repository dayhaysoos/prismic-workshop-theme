import { RichText } from 'prismic-reactjs';
import React from 'react';
import { Box, Flex, Image } from 'theme-ui';
import { Fade } from 'react-awesome-reveal';

/**
 * Step 4
 * This is what a component will look like when passing slice data to it from Prismic.
 *
 * Delete component below and uncomment the commented out code
 */

function About() {
  return <h2>This is the About slice.</h2>;
}

// function About({ slice }) {
//   return (
//     <Fade>
//       <Box sx={{ backgroundColor: 'black', padding: '32px' }}>
//         <Flex
//           sx={{
//             justifyContent: 'space-between',
//             flexDirection: ['column', 'row'],
//             alignItems: 'center',
//             width: ['100%', '80%'],
//             margin: 'auto',
//           }}>
//           <Box sx={{ color: 'white', padding: '12px', width: ['100%', '50%'] }}>
//             <RichText render={slice.primary.about_description} />
//           </Box>
//           <Box sx={{ width: '300px', display: ['none', 'block'] }}>
//             <Image src={slice.primary.about_image.url} />
//           </Box>
//         </Flex>
//       </Box>
//     </Fade>
//   );
// }

export default About;
