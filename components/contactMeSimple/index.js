import styles from './contactMeSimple.module.css'
import Link from 'next/link'

export default function ContactMeSimple () {
  return (
    <div className={styles.contactMeContainer}>
      <div className="container" data-aos="fade-left">
        <p className={styles.title}>¿Tiene un proyecto en mente?</p>
        <p className={styles.description}>
          Estoy disponible para proyectos freelance. Si tiene alguna pregunta o simplemente quiere decir hola, no dude
          en contactarme.
        </p>
        <Link href={'/#contact-me'}>
          <a className={styles.button}>
            Contáctame
          </a>
        </Link>
      </div>
    </div>
  )
}
