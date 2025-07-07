// pages/_app.js
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'


export default function MyApp({ Component, pageProps }) {
  return (
   <ThemeProvider attribute="class" enableSystem defaultTheme="system">

      <Head>
        <title>Aifano Docs</title>
        <meta name="description" content="Aifano Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
