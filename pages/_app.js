import '../styles/globals.css';
import { CartProvider } from 'use-shopping-cart';
import { AuthProvider } from '../context/identity-context';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

/**
 *  Walkthrough 1
 * _app.js is the entry point for your Next JS app. This is where you'd wrap your providers
 * that you need access to globally.
 *  We have three Providers here:
 * CartProvider so we can use use-shopping-cart
 * ThemeProvider so we can take advantage of theming and the `sx` prop provided by Theme UI
 * AuthProvider which will allow us to use Netlify auth hooks that I've made
 */

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CartProvider
          mode='payment'
          cartMode='checkout-session'
          stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY}
          billingAddressCollection={false}
          successUrl='https://stripe.com'
          cancelUrl='https://twitter.com/dayhaysoos'
          allowedCountries={['US']}
          currency='USD'>
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
