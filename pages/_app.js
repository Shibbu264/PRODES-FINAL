import { ThemeProvider } from '@material-tailwind/react';
import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>PRODES</title>
       
      
        <link rel="icon" href="/images/brand.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
