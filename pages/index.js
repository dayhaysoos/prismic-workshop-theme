import Head from 'next/head';
import { Client } from '../prismic-config';
import Layout from '../components/layout';
import { SliceZone } from '../components/slice-zone';
import Contact from '../components/contact';
import { Box, Heading } from 'theme-ui';
import { Fade } from 'react-awesome-reveal';

export async function getStaticProps() {
  const home = await Client().getByUID('page', 'home');

  return {
    props: {
      home,
    },
  };
}

export default function Home(props) {
  return (
    <Layout>
      <section>
        <Box
          sx={{
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            margin: 'auto',
          }}>
          <Fade direction='down'>
            <Heading
              as='h1'
              sx={{
                fontSize: ['4em', '8em', '10em'],
                position: 'relative',
                top: ['0', '100px'],
                right: ['0', '4%', '8%'],
              }}>
              Rainbow{' '}
              <Fade delay={600} direction='up'>
                <Box
                  as='span'
                  sx={{
                    color: 'background',
                    fontStyle: 'italic',
                    textShadow:
                      '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                  }}>
                  Store
                </Box>
              </Fade>
            </Heading>
          </Fade>
        </Box>
        <SliceZone slices={props.home.data.body} />
        <Contact />
      </section>
    </Layout>
  );
}
