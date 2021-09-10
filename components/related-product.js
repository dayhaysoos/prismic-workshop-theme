import React from 'react';
import { Box, Grid, Image } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';

function RelatedProducts({ products }) {
  return (
    <>
      <h2> You may also like</h2>
      <Grid columns={[1, 2, 3]}>
        {products.map(({ related_product }) => {
          const { slug } = related_product;
          const { brand, title, linked_product } = related_product.data;
          return (
            <Link key={slug} href={`/products/${slug}`}>
              <a>
                <Box sx={{ marginBottom: '8px' }} as='h3'>
                  {RichText.asText(brand)}
                </Box>
                <Image
                  sx={{ marginBottom: '8px' }}
                  src={linked_product.image_url}
                />
                <Box as='p'> {RichText.asText(title)}</Box>
              </a>
            </Link>
          );
        })}
      </Grid>
    </>
  );
}

export default RelatedProducts;
