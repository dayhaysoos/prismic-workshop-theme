import React from 'react';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { Box, Flex, Image, Button, Close } from 'theme-ui';

import Select from './select';

function CheckoutDetails() {
  const { cartDetails, formattedTotalPrice, handleCartClick, removeItem } =
    useShoppingCart();

  const form = document.querySelector('form');

  const handleSubmit = async (event) => {
    event.preventDefault();
    form.submit();
  };

  return (
    <form
      action='/api/redirect-to-checkout'
      method='POST'
      onSubmit={handleSubmit}>
      <input
        type='hidden'
        name='cartDetails'
        value={JSON.stringify(cartDetails)}
      />
      <Box sx={{ marginBottom: '24px', width: '100%' }} as='table'>
        <caption className={`visually-hidden`}>Shopping Cart</caption>
        <thead>
          <Box as='tr'>
            <Box as='th' scope='col'>
              Name
            </Box>
            <Box as='th' scope='col'>
              Total
            </Box>
            <Box as='th' scope='col'>
              Quantity
            </Box>
          </Box>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {Object.keys(cartDetails).map((cartItem) => {
            const item = cartDetails[cartItem];
            return (
              <Box as='tr' key={item.sku}>
                <Box as='td' scope='row'>
                  {item.name}
                </Box>
                <Box as='td'>{item.formattedValue}</Box>
                <Box as='td'>
                  <label>
                    <span className={`visually-hidden`}>
                      Quantity of {item.name}
                    </span>
                    <Select cartItem={item} max='50' />
                  </label>
                </Box>
                <Box as='td'>
                  <Close
                    aria-label={`Remove ${item.name} from cart`}
                    title={'Remove'}
                    onClick={(e) => {
                      e.preventDefault();
                      removeItem(item.sku);
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </tbody>
      </Box>
      <Flex sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleCartClick();
          }}>
          Close
        </Button>
        <Button type='submit'>Checkout</Button>
      </Flex>
    </form>
  );
}

export default CheckoutDetails;
