import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="google" content="notranslate"/>
        <meta property="og:image" content="https://www.ransilad.com/logo.png"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
