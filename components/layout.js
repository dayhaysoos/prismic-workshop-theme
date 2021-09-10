import React from 'react';
import Header from './header';
import CheckoutModal from './checkout-modal';
import SkipLink from './skip-link';
import Footer from './footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          async
          defer
          src='https://static.cdn.prismic.io/prismic.js?new=true&repo=smashing-mag-workshop'
        />
      </Head>
      <SkipLink />
      <Header />
      <div
        style={{
          margin: `0 auto`,
        }}>
        <main>{children}</main>
        <Footer />
      </div>
      <CheckoutModal />
    </>
  );
};

export default Layout;
