import styles from './portfolio.module.css'
import { useState } from 'react'
import Image from 'next/image'

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
  id: 'inlet-01',
  category: ['all', 'web', 'mobile'],
  title: 'Inlet',
  image: '/images/portfolio/cover/inlet.jpg'
}, {
  id: 'voyhoy-01',
  category: ['all', 'web'],
  title: 'Voyhoy',
  image: '/images/portfolio/cover/voyhoy.jpg'
}, {
  id: 'techk-01',
  category: ['all', 'web', 'api'],
  title: 'techk',
  image: '/images/portfolio/cover/techk.jpg'
}, {
  id: 'cocha-01',
  category: ['all', 'web', 'api'],
  title: 'Cocha',
  image: '/images/portfolio/cover/cocha.jpg'
}, {
  id: 'tendy-01',
  category: ['all', 'web', 'api', 'mobile'],
  title: 'Tendy',
  image: '/images/portfolio/cover/tendy.jpg'
}, {
  id: 'idc-01',
  category: ['all', 'web'],
  title: 'IDC',
  image: '/images/portfolio/cover/idc.jpg'
}, {
  id: 'a21-01',
  category: ['all', 'mobile'],
  title: 'A21',
  image: '/images/portfolio/cover/a21.jpg'
}, {
  id: 'dtemite-01',
  category: ['all', 'mobile', 'api'],
  title: 'Dtemite',
  image: '/images/portfolio/cover/dtemite.jpg'
}, {
  id: 'nrp-01',
  category: ['all', 'web'],
  title: 'NextRoundPartners',
  image: '/images/portfolio/cover/nrp.jpg'
}, {
  id: 'ona-01',
  category: ['all', 'web'],
  title: 'OnaStudio',
  image: '/images/portfolio/cover/ona.jpg'
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
