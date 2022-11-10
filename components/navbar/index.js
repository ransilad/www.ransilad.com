import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from 'components/logo'
import styles from './navbar.module.css'
import MobileMenuIcon from '../icons/mobileMenu'

const MENU = [{
  label: 'Inicio',
  href: '/#home'
}, {
  label: 'Acerca de mi',
  href: '/#about-me'
}, {
  label: 'Portafolio',
  href: '/#portfolio'
}, {
  label: 'Contacto',
  href: '/#contact-me'
}]

function Navbar () {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showMenuClass, setShowMenuClass] = useState(styles.hiddenMenu)
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const handleShowMenu = () => {
    const newShowMenu = !showMenu
    setShowMenu(newShowMenu)
    validateMenuMobileClass(newShowMenu)
  }

  const handleChangePage = (path) => {
    handleShowMenu()
    router.push(path)
  }

  const validateMenuMobileClass = (newShowMenu) => {
    if (scrolled) {
      setShowMenuClass(newShowMenu ? styles.showMenu : styles.hiddenMenu)
    } else {
      if (!newShowMenu) {
        setShowMenuClass(styles.hiddenMenu + ' ' + styles.scrolled)
        setTimeout(() => setShowMenuClass(styles.hiddenMenu), 200)
      } else {
        setShowMenuClass(styles.showMenu + ' ' + styles.scrolled)
      }
    }
  }

  const renderMenuDesktop = useMemo(() => {
    return (
      MENU.map((item, i) => (
        <Link href={item.href} key={i} className={styles.navbar_item}>
          {item.label}
        </Link>
      ))
    )
  }, [])

  const renderMenuMobile = useMemo(() => {
    return (
      MENU.map((item, i) => (
        <div onClick={() => handleChangePage(item.href)} key={i}>
          <span>
            {item.label}
          </span>
        </div>
      ))
    )
  }, [handleChangePage])

  const handleDarkMode = () => {
    const html = document.querySelector('html')
    window.localStorage.setItem('darkMode', !JSON.parse(window.localStorage.getItem('darkMode') || 'false'))
    html.classList.toggle('dark')
  }

  return (
    <div className={`${styles.navbar} ${showMenuClass} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navbar_menu}>
          <div className={styles.logo}>
            <Link href={'/#home'}>
              <Logo width={80}/>
            </Link>
          </div>
          <div className={styles.openMobileMenu}>
            <div className={styles.lightIcon} onClick={handleDarkMode}/>
            <span onClick={handleShowMenu}>
              <MobileMenuIcon fill="#49be7e"/>
            </span>
          </div>
          <div className={styles.navbar_items}>
            {renderMenuDesktop}
            <div className={styles.lightIcon} onClick={handleDarkMode}/>
          </div>
        </div>
      </div>
      <div className={styles.menuMobile}>
        {renderMenuMobile}
      </div>
    </div>
  )
}

export default React.memo(Navbar)
