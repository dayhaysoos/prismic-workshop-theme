import React from 'react';
import Head from 'next/head';
import Product from '../../components/product';
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';
import Layout from '../../components/layout';

/**
 * Step 10
 * getStaticPaths() is a function that allows you to gather unique URLs for each product page.
 * Uncomement the getStaticPaths() function below so that getStaticProps() can access the paths through "params"
 */

// export async function getStaticPaths() {
//   const allProducts = await Client().query(
//     Prismic.Predicates.at('document.type', 'product')
//   );

//   return {
//     paths: allProducts.results.map((prod) => {
//       return `/products/${prod.uid}`;
//     }),
//     fallback: true,
//   };
// }

/**
 * Step 11
 * Just like how we queried before with getStaticProps(), we're doing the same thing for each unique product
 * so we can create a page for each one.
 *
 * Uncomment getStaticProps() below
 */

// export async function getStaticProps({ params }) {
//   const product = await Client().getByUID('product', params.uid, {
//     graphQuery: `
//       {
//         product {
//           ...productFields
//           related_products {
//             related_product {
//               ...on product {
//                 ...productFields
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       product,
//     },
//   };
// }

/**
 * Step 12
 * Here, we pass the product data to the ProductPage component, which includes
 * the <Product /> component
 *
 * Delete the line that says "This is a product page" and uncomment the line below it.
 */

const ProductPage = ({ product }) => {
  return (
    <Layout>
      <h2>This is a product page</h2>
      {/* <Product product={product} /> */}
    </Layout>
  );
};

export default ProductPage;
