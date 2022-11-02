import React from 'react'

import styles from './hardSkills.module.css'
import ReactIcon from '../icons/skills/react'
import NextIcon from '../icons/skills/next'
import VueIcon from '../icons/skills/vue'
import HtmlIcon from '../icons/skills/html'
import CssIcon from '../icons/skills/css'
import AngularIcon from '../icons/skills/angular'
import SvelteIcon from '../icons/skills/svelte'
import IonicIcon from '../icons/skills/ionic'
import SassIcon from '../icons/skills/sass'
import BootstrapIcon from '../icons/skills/bootstrap'
import PythonIcon from '../icons/skills/python'
import JavaScriptIcon from '../icons/skills/javaScript'
import MongoDBIcon from '../icons/skills/mongo'
import PostgreSQLIcon from '../icons/skills/postgreSQL'
import MySQLIcon from '../icons/skills/mySQL'
import FirebaseIcon from '../icons/skills/firebase'
import DockerIcon from '../icons/skills/docker'
import FlaskIcon from '../icons/skills/flask'
import DjangoIcon from '../icons/skills/django'
import GitHubIcon from '../icons/skills/github'
import NpmIcon from '../icons/skills/npm'
import ESLintIcon from '../icons/skills/eslint'
import YarnIcon from '../icons/skills/yarn'
import GitLabIcon from '../icons/skills/gitlab'
import AwsIcon from '../icons/skills/aws'
import GCloudIcon from '../icons/skills/gcloud'
import VercelIcon from '../icons/skills/vercel'
import GTMIcon from '../icons/skills/gtm'
import GAIcon from '../icons/skills/ga'
import GulpIcon from '../icons/skills/gulp'
import NetlifyIcon from '../icons/skills/netlify'
import TailwindIcon from '../icons/skills/tailwind'

const HARD_SKILLS = [{
  title: 'HTML5',
  image: <HtmlIcon fill="#E34F26"/>
}, {
  title: 'CSS3',
  image: <CssIcon fill="#1572B6"/>
}, {
  title: 'Sass',
  image: <SassIcon fill="#CC6699"/>
}, {
  title: 'React',
  image: <ReactIcon fill="#61DAFB"/>
}, {
  title: 'Next',
  image: <NextIcon fill="#000000"/>
}, {
  title: 'Vue',
  image: <VueIcon fill="#4FC08D"/>
}, {
  title: 'Angular',
  image: <AngularIcon fill="#DD0031"/>
}, {
  title: 'Svelte',
  image: <SvelteIcon fill="#FF3E00"/>
}, {
  title: 'Ionic',
  image: <IonicIcon fill="#3880FF"/>
}, {
  title: 'Bootstrap',
  image: <BootstrapIcon fill="#7952B3"/>
}, {
  title: 'TailwindCSS',
  image: <TailwindIcon fill="#06B6D4"/>
}, {
  title: 'Python',
  image: <PythonIcon fill="#3776AB"/>
}, {
  title: 'Flask',
  image: <FlaskIcon fill="#000000"/>
}, {
  title: 'Django',
  image: <DjangoIcon fill="#092E20"/>
}, {
  title: 'JavaScript',
  image: <JavaScriptIcon fill="#F7DF1E"/>
}, {
  title: 'MongoDB',
  image: <MongoDBIcon fill="#47A248"/>
}, {
  title: 'PostgreSQL',
  image: <PostgreSQLIcon fill="#4169E1"/>
}, {
  title: 'MySQL',
  image: <MySQLIcon fill="#4479A1"/>
}, {
  title: 'Firebase',
  image: <FirebaseIcon fill="#FFCA28"/>
}, {
  title: 'Github',
  image: <GitHubIcon fill="#181717"/>
}, {
  title: 'Gitlab',
  image: <GitLabIcon fill="#FC6D26"/>
}, {
  title: 'Docker',
  image: <DockerIcon fill="#2496ED"/>
}, {
  title: 'npm',
  image: <NpmIcon fill="#CB3837"/>
}, {
  title: 'yarn',
  image: <YarnIcon fill="#2C8EBB"/>
}, {
  title: 'Gulp',
  image: <GulpIcon fill="#CF4647"/>
}, {
  title: 'ESLint',
  image: <ESLintIcon fill="#4B32C3"/>
}, {
  title: 'GTM',
  image: <GTMIcon fill="#246FDB"/>
}, {
  title: 'Google Analytics',
  image: <GAIcon fill="#E37400"/>
}, {
  title: 'AWS',
  image: <AwsIcon fill="#232F3E"/>
}, {
  title: 'Google Cloud',
  image: <GCloudIcon fill="#4285F4"/>
}, {
  title: 'Vercel',
  image: <VercelIcon fill="#000000"/>
}, {
  title: 'Netlify',
  image: <NetlifyIcon fill="#00C7B7"/>
}]

function HardSkills () {
  return (
    <div className="container">
      <div className={styles.hardSkillsContainer}>
        <div className={styles.title}>
          <h2>Habilidades técnicas</h2>
        </div>
        <div className={styles.contentContainer}>
          <p>
            A lo largo de los años he ido adquiriendo conocimientos en diferentes áreas de la programación, tanto en el
            front-end como en el back-end. A continuación, les dejo una lista de las tecnologías que he utilizado en mis
            proyectos.
          </p>
          <div>
            <div className={styles.categoryContainer}>
              <div className={styles.skillsContainer}>
                {HARD_SKILLS.map((skill, index) => (
                  <div className={styles.skill} key={index}>
                    {skill.image}
                    <span>{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(HardSkills)
