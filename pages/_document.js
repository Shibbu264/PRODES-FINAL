/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head><link rel="stylesheet" href="/styles.css" />
        {/* Seo needs to be done */}
        <title>Prodes</title>
      
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/Group 62.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
