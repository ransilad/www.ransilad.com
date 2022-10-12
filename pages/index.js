import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abel Rangel</title>
        <meta name="description" content="Página en desarrollo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Abel Rangel</h1>
      </main>
    </div>
  )
}
