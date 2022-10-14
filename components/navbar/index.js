import Logo from 'components/logo'
import styles from './navbar.module.css'

export default function Navbar () {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar_menu}>
          <div className={styles.logo}>
            <Logo width={80}/>
          </div>
          <div className={styles.navbar_items}>
            <div className={styles.navbar_item}>
              Inicio
            </div>
            {/* <div className={styles.navbar_item}>
              Acerca de
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
