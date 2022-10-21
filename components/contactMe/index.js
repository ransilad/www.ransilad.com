import React from 'react'
import Image from 'next/image'

import styles from './contactMe.module.css'

function ContactMe () {
  return (
    <>
      <div className={styles.contactMeContainerWithImage}>
        <div className="container">
          <div className={styles.titleAndSubtitle}>
            <p className={styles.title}>Mantengámonos en contacto</p>
            <p className={styles.subTitle}>
              Gracias por llegar hasta aquí. Espero que este portfolio, hecho con mucho cariño, haya sido de su agrado.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contactMeContainer}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src="/images/phone_illustrations.png" width={266} height={213} alt="" layout="responsive"/>
              </div>
              <p>Llámame</p>
              <a href="tel:+56930627603" target="_blank" rel="noreferrer">+56930627603</a>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src="/images/mail_illustrations.png" width={266} height={221} alt="" layout="responsive"/>
              </div>
              <p>Envíame un correo electrónico</p>
              <a href="mailto:abeld.rangels@gmail.com" target="_blank" rel="noreferrer">abeld.rangels@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(ContactMe)
