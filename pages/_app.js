import Head from 'next/head'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>Abel Rangel</title>
        <meta
          name="description"
          content="Ingeniero que trabaja arduamente, con un don para crear soluciones elegantes en el menor tiempo posible"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="google" content="notranslate"/>

        <link rel="icon" href="/favicon.png"/>

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.ransilad.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Abel Rangel"/>
        <meta property="og:description"
              content="Ingeniero que trabaja arduamente, con un don para crear soluciones elegantes en el menor tiempo posible"/>
        <meta property="og:image" content="https://www.ransilad.com/cover.jpg"/>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:domain" content="ransilad.com"/>
        <meta name="twitter:url" content="https://www.ransilad.com/"/>
        <meta name="twitter:title" content="Abel Rangel"/>
        <meta name="twitter:description"
              content="Ingeniero que trabaja arduamente, con un don para crear soluciones elegantes en el menor tiempo posible"/>
        <meta name="twitter:image" content="https://www.ransilad.com/cover.jpg"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
