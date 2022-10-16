import styles from './footer.module.css'

export default function Footer () {
  return (
    <footer className="container">
      <div className={styles.footer}>
        <p className={styles.footerText}>Todos los derechos reservados</p>
        <p className={styles.footerText}>Abel Rangel @ 2022</p>
      </div>
    </footer>
  )
}
