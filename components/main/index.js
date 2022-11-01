import React from 'react'
import Image from 'next/image'

import styles from './main.module.css'
import MailIcon from '../icons/mail'
import PhoneIcon from '../icons/phone'
import LinkedInIcon from '../icons/rrss/linkedin'
import GithubIcon from '../icons/rrss/github'
import TwitterIcon from '../icons/rrss/twitter'

function Main () {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.informationContainer}>
          <div className={styles.bubble}>
            Hola, soy
          </div>
          <p className={styles.name}>Abel Rangel</p>
          <p className={styles.rol}>Desarrollador Fullstack</p>
          <p className={styles.informationItems}>
            <MailIcon width={20} height={20}/>
            <a href="mailto:abeld.rangels@gmail.com" target="_blank" rel="noreferrer">abeld.rangels@gmail.com</a>
          </p>
          <p className={styles.informationItems}>
            <PhoneIcon width={20} height={20}/>
            <a href="tel:+56930627603" target="_blank" rel="noreferrer">+56930627603</a>
          </p>
          <p className={styles.RRSSIcons}>
            <a href="https://www.linkedin.com/in/ransilad" target='_blank' rel="noreferrer">
              <LinkedInIcon/>
            </a>
            <a href="https://github.com/ransilad" target='_blank' rel="noreferrer">
              <GithubIcon/>
            </a>
            <a href="https://twitter.com/ransilad" target='_blank' rel="noreferrer">
              <TwitterIcon/>
            </a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/abelRangel.webp"
            alt=""
            width={300}
            height={300}
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Main)
