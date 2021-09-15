import React from 'react';
import { Flex, Box, Heading, Image, Button } from 'theme-ui';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '../prismic-config';
import Container from './container';
import RelatedProducts from './related-product';

function Product({ product }) {
  const {
    description,
    title,
    features,
    callout,
    brand,
    linked_product,
    related_products,
  } = product.data;

  const { image_url, currency, price } = linked_product;

  const { addItem } = useShoppingCart();

  return (
    <Container>
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexDirection: ['column', 'column', 'row'],
          marginBottom: '10%',
        }}>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 2,
          }}>
          {/**
           * Step 13
           * Uncomment the <Image /> component below
           */}
          <Image alt={title} src={image_url} />
        </Flex>
        <Flex
          sx={{ flexDirection: 'column', justifyContent: 'center', flex: 2 }}>
          {/**
           * Step 14
           * Uncomment both <RichText /> components below
           */}
          {/* <RichText render={brand} />
          <RichText render={title} /> */}
          <Box as='p' sx={{ fontSize: '24px', marginBottom: '24px' }}>
            {formatCurrencyString({ value: price, currency })}
          </Box>

          <Button
            sx={{ height: '56px', marginBottom: '32px' }}
            onClick={() => addItem(linked_product)}>
            Add to Cart
          </Button>
          <Box>
            {/**
             * Step 15
             * Uncomment the RichText component below
             */}
            {/* <RichText render={callout} htmlSerializer={htmlSerializer} /> */}
          </Box>
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: ['start', 'start', 'center'],
          flexDirection: ['column', 'column', 'row'],
          borderTop: '5px solid black',
          borderBottom: '5px solid black',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}>
        <Box sx={{ width: '40%' }}>
          <Heading as='h2'>Description</Heading>
          {/**
           * Step 16
           * Uncomment the <RichText /> component below
           */}
          {/* <RichText render={description} /> */}
        </Box>
        <Box sx={{ width: '50%' }}>
          {/**
           * Step 17
           * Uncomment the <RichText /> component below
           */}
          {/* <RichText render={features} htmlSerializer={htmlSerializer} /> */}
        </Box>
      </Flex>
      {/**
       * Step 18
       * Uncomment the <RelatedProducts /> component below
       */}
      {/* <RelatedProducts products={related_products} /> */}
    </Container>
  );
}

export default Product;
