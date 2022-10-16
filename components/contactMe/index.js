import styles from './contactMe.module.css'

export default function ContactMe () {
  return (
    <div className={styles.contactMeContainer}>
      <div className="container">
        <p className={styles.title}>¿Tiene un proyecto en mente?</p>
        <p className={styles.description}>
          Estoy disponible para proyectos freelance. Si tiene alguna pregunta o simplemente quiere decir hola, no dude
          en contactarme.
        </p>
        <button>Contáctame</button>
      </div>
    </div>
  )
}
