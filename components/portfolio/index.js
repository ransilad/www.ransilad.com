import React, { useState } from 'react'
import Image from 'next/image'

import styles from './portfolio.module.css'
import { CATEGORIES, PORTFOLIO_ITEMS } from 'constants/index'
import LinkIcon from '../icons/link'

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
                <Image src={item.image} width={500} height={300} alt=""/>
                <div className={styles.portfolioItemContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description || ''}</p>
                  <div className={styles.portfolioItemTags}>{item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}</div>
                </div>
                <div className={styles.portfolioFooter}>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visitar sitio
                      <LinkIcon width={15} heigth={15}/>
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Portfolio)
