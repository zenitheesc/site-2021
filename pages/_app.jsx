import React from 'react';
import Head from 'next/head';
import 'styles/global.css';

export default function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}
