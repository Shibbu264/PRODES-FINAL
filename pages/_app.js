import { ThemeProvider } from '@material-tailwind/react';
import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>PRODES</title>
       
      
        <link rel="icon" href="/images/Group 62.svg" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
