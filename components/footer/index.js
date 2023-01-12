import React from 'react'

import styles from './footer.module.css'

function Footer () {
  return (
    <footer className="container">
      <div className={styles.footer}>
        <p className={styles.footerText}>Todos los derechos reservados</p>
        <p className={styles.footerText}>Abel Rangel @ 2023</p>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
