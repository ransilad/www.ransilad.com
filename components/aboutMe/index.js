import Image from 'next/image'

import styles from './aboutMe.module.css'

export default function AboutMe () {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src="/images/developer.svg" width={850} height={740} layout="responsive" alt=""/>
        </div>
        <div className={styles.informationContainer}>
          <p className={styles.title}>Acerca de mi</p>
          <p className={styles.description}>
            Hola, soy un Ingeniero que trabaja arduamente, con un don para crear soluciones elegantes en el menor tiempo
            posible. Me encanta la tecnología y la programación y, sobre todas las cosas me especializo en el desarrollo
            de aplicaciones web y móviles.
          </p>
          <p className={styles.tags}>
            <span>Frontend</span>
            <span>html</span>
            <span>css</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Angular</span>
            <span>Vue</span>
            <span>Svelte</span>
            <span>Backend</span>
            <span>Python</span>
            <span>Java</span>
            <span>NodeJS</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Firebase</span>
            <span>Docker</span>
            <span>Figma</span>
            <span>AWS</span>
            <span>Google Cloud</span>
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
