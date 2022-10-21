import React from 'react'
import Image from 'next/image'

import styles from './aboutMe.module.css'

function AboutMe () {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/developer.svg"
            width={850}
            height={740}
            layout="responsive"
            alt=""
          />
        </div>
        <div className={styles.informationContainer}>
          <p className={styles.title}>Acerca de mi</p>
          <p className={styles.description}>
            Entusiasta de la tecnología, con un don para crear soluciones elegantes en el menor tiempo posible.
          </p>
          <p className={styles.description}>
            Empático, responsable, con capacidad de escucha, compromiso y trabajo en equipo. Me adapto a cualquier
            proyecto y reto que me propongan.
          </p>
          <p className={styles.description}>
            Soy de la idea que el conocimiento es para compartirlo, por lo que me gusta enseñar y aprender de los demás.
          </p>
          <a href="https://drive.google.com/file/d/1IVSy7B3A1WU8Z1p8bhQcS7O1HwE30Udf/view?usp=sharing" target="_blank"
             rel="noreferrer">
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AboutMe)
