import React from 'react';
import Layout from '../../components/layout';
import ProductCatalog from '../../components/product-catalog';
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';
import { Heading } from '@theme-ui/components';

/**
 * Step 8
 * Similar to how we queried the Home page data from the Prismic Repo, we are
 * querying all of the product data so we can display them in our ProductCatalog component.
 */
// export async function getStaticProps() {
//   const allProducts = await Client().query(
//     Prismic.Predicates.at('document.type', 'product')
//   );

//   return {
//     props: {
//       products: allProducts.results,
//     },
//   };
// }

function Products({ products }) {
  return (
    <Layout>
      <Heading as='h1' sx={{ textAlign: 'center' }}>
        Products
      </Heading>
      {/**
       * Step 9
       * Delete the <p /> tag below and uncomment the line with <ProductCatalog />
       */}
      <p>Here we will display our products</p>
      {/* <ProductCatalog products={products} /> */}
    </Layout>
  );
}

export default Products;
