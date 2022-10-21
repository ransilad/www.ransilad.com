import React from 'react'

import styles from './statsSummary.module.css'
import ProjectsIcon from '../icons/projects'
import SupportIcon from '../icons/support'
import ExperienceIcon from '../icons/experience'

function StatsSummary () {
  return (
    <div className="container">
      <div className={styles.statsContainer}>
        <div className={styles.item}>
          <div>
            <ExperienceIcon width={60} height={60} fill="#515151"/>
          </div>
          <div>
            <span>9+ años</span>
            <p>Experiencia</p>
          </div>
        </div>
        <div className={styles.separator}/>
        <div className={styles.item}>
          <div>
            <ProjectsIcon width={60} height={60} fill="#515151"/>
          </div>
          <div>
            <span>30+ proyectos</span>
            <p>Completados</p>
          </div>
        </div>
        <div className={styles.separator}/>
        <div className={styles.item}>
          <div>
            <SupportIcon width={60} height={60} fill="#515151"/>
          </div>
          <div>
            <span>Soporte</span>
            <p>Online 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(StatsSummary)
