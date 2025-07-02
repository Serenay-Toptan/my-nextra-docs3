import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';  // <-- Bunu ekledik

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aifano Docs</title>
        <meta name="description" content="Aifano Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Component {...pageProps} />
    </>
  );
}
