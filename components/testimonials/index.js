import React from 'react'
import Image from 'next/image'

import styles from './testimonials.module.css'
import { TESTIMONIALS } from 'constants/index'

function Testimonials () {
  return (
    <div className="container">
      <p className={styles.subTitle}>Testimonios</p>
      <p className={styles.title}>Lo que dicen mis compañeros</p>
      <p className={styles.linkedInLink}>
        <a
          href="https://www.linkedin.com/in/ransilad/details/recommendations/"
          target="_blank"
          rel="noreferrer"
        >Ver en LinkedIn</a>
      </p>
      <div className={styles.testimonials}>
        {TESTIMONIALS.map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.image}>
              <Image
                src={testimonial.image}
                width={500}
                height={500}
                alt=""
                quality={50}
              />
            </div>
            <p className={styles.description}>{testimonial.testimonial}</p>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.rol}>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Testimonials)
