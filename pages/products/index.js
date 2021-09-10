import React from 'react';
import Layout from '../../components/layout';
import ProductCatalog from '../../components/product-catalog';
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';
import { Heading } from '@theme-ui/components';

export async function getStaticProps() {
  const allProducts = await Client().query(
    Prismic.Predicates.at('document.type', 'product')
  );

  return {
    props: {
      products: allProducts.results,
    },
  };
}

function Products({ products }) {
  return (
    <Layout>
      <Heading as='h1' sx={{ textAlign: 'center' }}>
        Products
      </Heading>
      <ProductCatalog products={products} />
    </Layout>
  );
}

export default Products;
