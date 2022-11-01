import React from 'react'
import Image from 'next/image'

import styles from './testimonials.module.css'

const TESTIMONIALS = [{
  name: 'Roger Robinson',
  position: 'Product Manager',
  testimonial: 'Dentro de nuestro equipo de desarrolladores, Abel siempre era el más confiable. Al dar una tarea o proyecto a Abel, él primero planificaba bien, haciendo las investigaciones necesarias. Luego lo completaba con agilidad, entregando un producto que en su primer borrador ya estaba casi listo para lanzar. Abel casi nunca cometía errores, por su diligente ética de estudiar bien los problemas antes de saltar a una solución. Abel posee una creatividad para solucionar problemas que nunca dejó de asombrarnos, a la vez haciendo más fácil mi vida como su jefe. Cuando surgía una tarea o proyecto especialmente importante para la empresa, entre los gerentes decíamos: “démosla a Abel.”',
  image: '/images/testimonials/roger.jpeg'
}, {
  name: 'Víctor Navarro',
  position: 'Senior Software Engineer Backend',
  testimonial: 'Abel es una persona muy esforzada, que se enfoca en la resolución de objetivos tanto en los proyectos que participamos como personales. Se capacita constantemente y tiene ganas de aprender todos los días. Es una persona entusiasta, muy agradable y que demuestra mucho compromiso con su equipo. Fue un agrado haber compartido con Abel mientras estuve en Cocha, es un ingeniero y un hombre de calidad, tanto técnica como humana.',
  image: '/images/testimonials/victor.jpeg'
}, {
  name: 'Angel Rivera',
  position: 'Senior Software Engineer Backend',
  testimonial: 'Gran colaborador en el equipo de desarrollo, tanto profesionalmente y como persona. Cuenta con una gran capacidad de aprendizaje y adaptación, muy buen trabajo en equipo y análisis para resolución de problemas.',
  image: '/images/testimonials/angel.jpg'
}]

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
