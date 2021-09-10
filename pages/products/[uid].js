import React from 'react';
import Head from 'next/head';
import Product from '../../components/product';
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';
import Layout from '../../components/layout';

const ProductPage = ({ product }) => {
  return (
    <Layout>
      <Product product={product} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const allProducts = await Client().query(
    Prismic.Predicates.at('document.type', 'product')
  );

  return {
    paths: allProducts.results.map((prod) => {
      return `/products/${prod.uid}`;
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await Client().getByUID('product', params.uid, {
    graphQuery: `
      {
        product {
          ...productFields
          related_products {
            related_product {
              ...on product {
                ...productFields
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
