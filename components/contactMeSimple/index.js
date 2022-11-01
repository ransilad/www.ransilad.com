import React from 'react'
import Link from 'next/link'

import styles from './contactMeSimple.module.css'

function ContactMeSimple () {
  return (
    <div className={styles.contactMeContainer}>
      <div className="container">
        <p className={styles.title}>¿Tiene un proyecto en mente?</p>
        <p className={styles.description}>
          Estoy disponible para proyectos freelance. Si tiene alguna pregunta o simplemente quiere decir hola, no dude
          en contactarme.
        </p>
        <Link href={'/#contact-me'} className={styles.button}>
          Contáctame
        </Link>
      </div>
    </div>
  )
}

export default React.memo(ContactMeSimple)
