// _app.js
import '@/styles/globals.css';
import { WagmiConfig, createClient } from 'wagmi';
import { getDefaultProvider } from 'ethers';

// Create the Wagmi client
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function MyApp({ Component, pageProps }) {
  return (
    // Wrap the app in WagmiConfig with the client
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

// Export MyApp as the default
export default MyApp;
