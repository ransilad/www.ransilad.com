import { useState } from 'react'
import Image from 'next/image'

import styles from './portfolio.module.css'

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
  image: '/images/portfolio/cover/inlet.jpg'
}, {
  id: 'voyhoy',
  category: ['all', 'web', 'api'],
  title: 'Voyhoy',
  image: '/images/portfolio/cover/voyhoy.jpg'
}, {
  id: 'damath',
  category: ['all', 'web'],
  title: 'Damath',
  image: '/images/portfolio/cover/damath.jpg'
}, {
  id: 'techk',
  category: ['all', 'web', 'api'],
  title: 'techk',
  image: '/images/portfolio/cover/techk.jpg'
}, {
  id: 'cocha',
  category: ['all', 'web', 'api'],
  title: 'Cocha',
  image: '/images/portfolio/cover/cocha.jpg'
}, {
  id: 'tendy',
  category: ['all', 'web', 'api', 'mobile'],
  title: 'Tendy',
  image: '/images/portfolio/cover/tendy.jpg'
}, {
  id: 'idc',
  category: ['all', 'web'],
  title: 'IDC',
  image: '/images/portfolio/cover/idc.jpg'
}, {
  id: 'a21',
  category: ['all', 'mobile'],
  title: 'A21',
  image: '/images/portfolio/cover/a21.jpg'
}, {
  id: 'dtemite',
  category: ['all', 'mobile', 'api'],
  title: 'Dtemite',
  image: '/images/portfolio/cover/dtemite.jpg'
}, {
  id: 'nrp',
  category: ['all', 'web'],
  title: 'NextRoundPartners',
  image: '/images/portfolio/cover/nrp.jpg'
}, {
  id: 'ona',
  category: ['all', 'web'],
  title: 'OnaStudio',
  image: '/images/portfolio/cover/ona.jpg'
}, {
  id: 'lopesa',
  category: ['all', 'web', 'mobile'],
  title: 'Lopesa',
  image: '/images/portfolio/cover/lopesa.jpg'
}, {
  id: 'switchmultimpresor',
  category: ['all', 'web'],
  title: 'Switch Multi Impresor',
  image: '/images/portfolio/cover/bch_switchmultimpresor.jpg'
}, {
  id: 'cobranzas',
  category: ['all', 'web'],
  title: 'Cobranzas',
  image: '/images/portfolio/cover/bch-cobranzas.jpg'
}, {
  id: 'agendamiento',
  category: ['all', 'web'],
  title: 'Agendamiento',
  image: '/images/portfolio/cover/bch-agendamiento.jpg'
}, {
  id: 'contact-center',
  category: ['all', 'web'],
  title: 'Contact Center',
  image: '/images/portfolio/cover/bch-contact-center.jpg'
}]

export default function Portfolio () {
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
          {PORTFOLIO_ITEMS.filter(item => item.category.includes(selectedCategory)).map(item => (
            <div className={styles.portfolioItem} key={item.id}>
              <div className={styles.portfolioTitle}>{item.title}</div>
              <Image src={item.image} width={500} height={300} layout="responsive" alt=""/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
