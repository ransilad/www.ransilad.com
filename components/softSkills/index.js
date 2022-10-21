import Image from 'next/image'

import styles from './softSkills.module.css'

const SOFT_SKILLS = [{
  title: 'Actitud positiva en el sitio de trabajo',
  image: {
    src: '/images/positive_attitude_illustration.svg',
    width: 690,
    height: 573
  }
}, {
  title: 'Actitudes para trabajo en equipo y liderazgo',
  image: {
    src: '/images/teamwork_illustration.svg',
    width: 845,
    height: 545
  }
}, {
  title: 'Facilidad para comunicarme',
  image: {
    src: '/images/communication_illustration.svg',
    width: 986,
    height: 656
  }
}, {
  title: 'Capacidad para administrar el tiempo, aceptar y aprender de las críticas',
  image: {
    src: '/images/time_management_illustrations.svg',
    width: 676,
    height: 632
  }
}, {
  title: 'Rápida adaptación a los cambios y tolerancia al trabajo bajo presión',
  image: {
    src: '/images/work_under_pressure_illustration.svg',
    width: 810,
    height: 463
  }
}, {
  title: 'Me encanta aprender cosas nuevas o herramientas todos los días. Si no sé algo lo aprenderé',
  image: {
    src: '/images/online_learning_illustration.svg',
    width: 692,
    height: 500
  }
}]

export default function SoftSkills () {
  return (
    <div className="container">
      <div className={styles.title}>
        <h2>Habilidades blandas</h2>
      </div>
      <div className={styles.cards}>
        {SOFT_SKILLS.map((softSkill, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardImage}>
              <Image
                src={softSkill.image.src}
                width={softSkill.image.width}
                height={softSkill.image.height}
                alt=""
                layout="responsive"
              />
            </div>
            <p className={styles.cardTitle}>{softSkill.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
};
