import { useRouter } from 'next/router'
import { createRef, useEffect } from 'react'

import Navbar from 'components/navbar'
import Main from 'components/main'
import StatsSummary from 'components/statsSummary'
import AboutMe from 'components/aboutMe'
import Footer from 'components/footer'
import Testimonials from 'components/testimonials'
import Portfolio from 'components/portfolio'
import ContactMeSimple from 'components/contactMeSimple'
import ContactMe from 'components/contactMe'
import SoftSkills from 'components/softSkills'

export default function Home () {
  const { asPath } = useRouter()
  const aboutUsRef = createRef()
  const homeUsRef = createRef()
  const portfolioRef = createRef()
  const contactMeRef = createRef()

  useEffect(() => {
    const scrollIntoViewProps = { behavior: 'smooth', block: 'start' }

    if (asPath === '/#about-me') {
      aboutUsRef.current.scrollIntoView(scrollIntoViewProps)
    } else if (asPath === '/#portfolio') {
      portfolioRef.current.scrollIntoView(scrollIntoViewProps)
    } else if (asPath === '/#contact-me') {
      contactMeRef.current.scrollIntoView(scrollIntoViewProps)
    } else {
      homeUsRef.current.scrollIntoView(scrollIntoViewProps)
    }
  }, [aboutUsRef, asPath, contactMeRef, homeUsRef, portfolioRef])

  return (
    <div>
      <Navbar/>
      <div ref={homeUsRef}>
        <Main/>
      </div>
      <StatsSummary/>
      <div ref={aboutUsRef}>
        <AboutMe/>
      </div>
      <SoftSkills/>
      <div ref={portfolioRef}>
        <Portfolio/>
      </div>
      <ContactMeSimple/>
      <Testimonials/>
      <div ref={contactMeRef}>
        <ContactMe/>
      </div>
      <Footer/>
    </div>
  )
}
