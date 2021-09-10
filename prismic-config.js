/** Example file */

import Prismic from '@prismicio/client';
import Link from 'next/link';
import { Elements } from 'prismic-reactjs';
import { Box, Heading } from 'theme-ui';

export const htmlSerializer = function (type, element, content, children, key) {
  let props = {};

  switch (type) {
    case Elements.list:
      return (
        <Box
          key={key}
          as='ul'
          sx={{ paddingLeft: '18px' }}
          {...props}
          children={children}
        />
      );
    case Elements.listItem:
      return (
        <Box
          key={key}
          as='li'
          variant='styles.li'
          {...props}
          children={children}
        />
      );
    case Elements.h3:
      return (
        <Heading as='h3' variant='styles.h3' {...props} children={children} />
      );
  }
};

export const apiEndpoint = 'https://smashing-mag-workshop.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = '';

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'product') {
    return `/products/${doc.slug}`;
  }
  return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'product_collection') {
    return '/product/[uid]';
  }
  return '/';
};

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
);

export const Router = {
  routes: [],

  href: (type) => {
    const route = Router.routes.find((r) => r.type === type);
    return route && route.href;
  },
};

export const Client = (req = null, options = {}) =>
  Prismic.client(
    apiEndpoint,
    Object.assign({ routes: Router.routes }, options)
  );
