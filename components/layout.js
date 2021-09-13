import React from 'react';
import Header from './header';
import CheckoutModal from './checkout-modal';
import SkipLink from './skip-link';
import Footer from './footer';
import Head from 'next/head';

/**
 * Walkthrough 4
 *
 * This is a generic Layout component that will be used on every page. This is how we make sure the header
 * and footer is consistent. For really big web experiences, often you'd see multiple Layouts for varying purposes
 */

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
