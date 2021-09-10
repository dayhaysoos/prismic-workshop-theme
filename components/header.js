import React, { useContext } from 'react';
import { NavLink, Flex, Box, Button } from 'theme-ui';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { IdentityContext } from '../context/identity-context';
import { useShoppingCart } from 'use-shopping-cart';

const Dashboard = () => {
  return <h2>This is the dashboard</h2>;
};

const Header = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <Box
      as='header'
      sx={{
        backgroundColor: `background`,
      }}>
      <Flex
        as='nav'
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Link href={'/'}>
          <NavLink as={'a'}>Home</NavLink>
        </Link>
        <Link href={'/products'}>
          <NavLink as={'a'}>Products</NavLink>
        </Link>
        {user && (
          <>
            <Link href={'dashboard'}>
              <NavLink as='a'>Dashboard</NavLink>
            </Link>
          </>
        )}
        <Link href={'/contact'}>
          <NavLink as={'a'}>Contact</NavLink>
        </Link>
        <Button
          variant='header'
          onClick={() => handleCartClick()}
          variant='header'>
          Cart({cartCount})
        </Button>
        {!user ? (
          <Button variant='header' onClick={() => netlifyIdentity.open()}>
            Log in
          </Button>
        ) : (
          <Flex>
            <Button variant='header' onClick={() => netlifyIdentity.logout()}>
              Log out
            </Button>
            <Box as={'p'} sx={{ p: 2 }}>
              {user.user_metadata.full_name}
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
