import Head from 'next/head'

import Navbar from 'components/navbar'
import Main from 'components/main'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Abel Rangel</title>
        <meta name="description"
              content="Ingeniero que trabaja arduamente, con un don para crear soluciones elegantes en el menor tiempo posible"/>
      </Head>
      <Navbar/>
      <Main/>
    </div>
  )
}
