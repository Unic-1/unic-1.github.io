import React from 'react'
import './experience.css'
import SectionTitle from '../SectionTitle'
import SkillItem from './SkillItem'

const frontendSkills = [
  {
    skill: 'HTML',
    level: 'Experienced'
  },
  {
    skill: 'CSS',
    level: 'Intermediate'
  },
  {
    skill: 'Javascript',
    level: 'Experienced'
  },
  {
    skill: 'Vue',
    level: 'Experienced'
  },
  {
    skill: 'ReactJS',
    level: 'Intermediate'
  },
  {
    skill: 'NextJS',
    level: 'Intermediate'
  }
]

const backendSkills = [
  {
    skill: 'HTML',
    level: 'Experienced'
  },
  {
    skill: 'CSS',
    level: 'Intermediate'
  },
  {
    skill: 'Javascript',
    level: 'Experienced'
  },
  {
    skill: 'Vue',
    level: 'Experienced'
  },
  {
    skill: 'ReactJS',
    level: 'Intermediate'
  },
  {
    skill: 'NextJS',
    level: 'Intermediate'
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <SectionTitle title="My Experience" subtitle="What Skills I Have" />

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            { frontendSkills.map(({skill, level}) => <SkillItem skill={skill} level={level} /> )}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          { backendSkills.map(({skill, level}) => <SkillItem skill={skill} level={level} /> )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience