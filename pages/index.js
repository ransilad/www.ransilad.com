import Head from 'next/head'
import { useRouter } from 'next/router'
import { createRef, useEffect } from 'react'

import Navbar from 'components/navbar'
import Main from 'components/main'
import StatsSummary from 'components/statsSummary'
import AboutMe from 'components/aboutMe'
import Footer from 'components/footer'

export default function Home () {
  const { asPath } = useRouter()
  const aboutUsRef = createRef()
  const homeUsRef = createRef()

  useEffect(() => {
    const scrollIntoViewProps = { behavior: 'smooth', block: 'start' }

    if (asPath === '/#about-me') {
      aboutUsRef.current.scrollIntoView(scrollIntoViewProps)
    } else {
      homeUsRef.current.scrollIntoView(scrollIntoViewProps)
    }
  }, [aboutUsRef, asPath, homeUsRef])

  return (
    <div>
      <Head>
        <title>Abel Rangel</title>
        <meta name="description"
              content="Ingeniero que trabaja arduamente, con un don para crear soluciones elegantes en el menor tiempo posible"/>
      </Head>
      <Navbar/>
      <div ref={homeUsRef}>
        <Main/>
      </div>
      <StatsSummary/>
      <div ref={aboutUsRef}>
        <AboutMe/>
      </div>
      <Footer/>
    </div>
  )
}
