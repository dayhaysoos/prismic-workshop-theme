const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const validateCartItems =
  require('use-shopping-cart/utilities').validateCartItems;

const fetch = require('node-fetch');

// instead of returning a session ID to the client side for redirectToCheckout,
// we can redirect serverside with the created sessions url (session.url)

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const cartDetails = JSON.parse(req.body.cartDetails);
  let product;

  let inventory;

  try {
    const result = await fetch(
      'https://condescending-chandrasekhar-9f61bb.netlify.app/.netlify/functions/next_api_get_products'
    );

    inventory = await result.json();

    inventory = inventory.results.map((item) => item.blob);
  } catch (error) {
    console.log('Error: ', error);
  }

  try {
    product = validateCartItems(inventory, cartDetails);
  } catch (error) {
    res.status(400);
  }

  let line_items;
  try {
    line_items = product;
  } catch (error) {
    res.status(422).json({
      message: 'Some of the items in  your cart are invalid',
      error: error.message,
    });
  }

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      mode: 'payment',
      success_url: `${process.env.SITE_URL}/success`,
      cancel_url: process.env.SITE_URL,
      line_items,
    });
  } catch (error) {
    res.status(500).json({
      message: 'While communicating with Stripe, we encountered an error.',
      error: error.message,
    });
  }

  res.redirect(302, session.url);
};
