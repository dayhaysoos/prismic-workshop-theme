import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui';
import { formatCurrencyString } from 'use-shopping-cart';
import Container from '../../components/container';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const slugify = (str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return `${slug}`.replace(/\/\/+/g, '/');
};

const SelectionSlice = ({ slice }) => {
  return (
    <Container>
      <Fade>
        <RichText render={slice.primary.selection_header} />
        <RichText render={slice.primary.selection_copy} />
        <Flex>
          {slice?.items?.map((item, i) => {
            return (
              <Link
                key={item.selection_products.title + i}
                href={`/products/${slugify(item.selection_products.title)}`}>
                <a>
                  <Box sx={{ padding: '2px' }}>
                    <img
                      width='100%'
                      src={item.selection_products.image}
                      alt={item.selection_products.title}
                      key={`img-${i}`}
                      style={{ marginBottom: '4px' }}
                    />
                  </Box>
                  <Box>
                    <strong>{item.selection_products.title}</strong>
                    <p style={{ marginTop: '4px' }} key={`item.price-${i}`}>
                      {formatCurrencyString({
                        value: item.selection_products.price,
                        currency: 'USD',
                      })}
                    </p>
                  </Box>
                </a>
              </Link>
            );
          })}
        </Flex>
      </Fade>
    </Container>
  );
};

export default SelectionSlice;
