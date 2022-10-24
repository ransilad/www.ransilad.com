import React, { useState } from 'react'
import Image from 'next/image'

import styles from './portfolio.module.css'
import SearchIcon from '../icons/search'

const CATEGORIES = [{
  id: 'all',
  name: 'Todas las categorías'
}, {
  id: 'web',
  name: 'Sitios web'
}, {
  id: 'mobile',
  name: 'Aplicaciones móviles'
}, {
  id: 'api',
  name: 'APIs'
}]

const PORTFOLIO_ITEMS = [{
  id: 'inlet',
  category: ['all', 'web', 'mobile'],
  title: 'Inlet',
  image: '/images/portfolio/cover/inlet.png',
  topic: 'Comunidades'
}, {
  id: 'voyhoy',
  category: ['all', 'web', 'api'],
  title: 'Voyhoy',
  image: '/images/portfolio/cover/voyhoy.png',
  topic: 'Viajes'
}, {
  id: 'damath',
  category: ['all', 'web'],
  title: 'Damath',
  image: '/images/portfolio/cover/damath.png',
  topic: 'Diseño'
}, {
  id: 'techk',
  category: ['all', 'web', 'api'],
  title: 'techk',
  image: '/images/portfolio/cover/techk.png',
  topic: 'Ventas'
}, {
  id: 'cocha',
  category: ['all', 'web', 'api'],
  title: 'Cocha',
  image: '/images/portfolio/cover/cocha.png',
  topic: 'Viajes'
}, {
  id: 'tendy',
  category: ['all', 'web', 'api', 'mobile'],
  title: 'Tendy',
  image: '/images/portfolio/cover/tendy.png',
  topic: 'Finanzas'
}, {
  id: 'idc',
  category: ['all', 'web'],
  title: 'IDC',
  image: '/images/portfolio/cover/idc.png',
  topic: 'Comunidades'
}, {
  id: 'a21',
  category: ['all', 'mobile'],
  title: 'A21',
  image: '/images/portfolio/cover/a21.png',
  topic: 'Viajes'
}, {
  id: 'dtemite',
  category: ['all', 'mobile', 'api'],
  title: 'Dtemite',
  image: '/images/portfolio/cover/dtemite.png',
  topic: 'Finanzas'
}, {
  id: 'nrp',
  category: ['all', 'web'],
  title: 'NextRoundPartners',
  image: '/images/portfolio/cover/nrp.png',
  topic: 'Diseño'
}, {
  id: 'ona',
  category: ['all', 'web'],
  title: 'OnaStudio',
  image: '/images/portfolio/cover/ona.png',
  topic: 'Diseño'
}, {
  id: 'lopesa',
  category: ['all', 'web', 'mobile'],
  title: 'Lopesa',
  image: '/images/portfolio/cover/lopesa.png',
  topic: 'Ventas'
}, {
  id: 'switchmultimpresor',
  category: ['all', 'web'],
  title: 'Switch Multi Impresor',
  image: '/images/portfolio/cover/bch_switchmultimpresor.png',
  topic: 'Banca'
}, {
  id: 'cobranzas',
  category: ['all', 'web'],
  title: 'Cobranzas',
  image: '/images/portfolio/cover/bch-cobranzas.png',
  topic: 'Banca'
}, {
  id: 'agendamiento',
  category: ['all', 'web'],
  title: 'Agendamiento',
  image: '/images/portfolio/cover/bch-agendamiento.png',
  topic: 'Banca'
}, {
  id: 'contact-center',
  category: ['all', 'web'],
  title: 'Contact Center',
  image: '/images/portfolio/cover/bch-contact-center.png',
  topic: 'Banca'
}, {
  id: 'svp-condominio',
  category: ['all', 'web'],
  title: 'SVP Condominio',
  image: '/images/portfolio/cover/svp-condominio.png',
  topic: 'Condominios'
}]

function Portfolio () {
  const [selectedCategory, setSelectedCategory] = useState('all')
  return (
    <div className={styles.portfolioContainer}>
      <div className="container">
        <p className={styles.title}>Portafolio</p>
        <div className={styles.filters}>
          {CATEGORIES.map(category => (
            <span
              className={selectedCategory === category.id ? styles.active : ''}
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </span>
          ))}
        </div>
        <div className={styles.portfolio}>
          {PORTFOLIO_ITEMS
            .filter(item => item.category.includes(selectedCategory))
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(item => (
              <div className={styles.portfolioItem} key={item.id}>
                <div className={styles.portfolioTitle}>
                  <div className={styles.portfolioImage}>
                    <SearchIcon width={30} fill="#fff"/>
                  </div>
                  <p>{item.title}</p>
                  <small>{item.topic}</small>
                </div>
                <Image src={item.image} width={500} height={300} layout="responsive" alt=""/>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Portfolio)
