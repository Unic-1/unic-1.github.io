import React from 'react'
import './project.css'
import SectionTitle from '../SectionTitle'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section id='project'>
      <SectionTitle title="Projects" subtitle="My Recent Work" />

      <div className="container project__container">
       { [1,2,3,4,5,6].map(() => <ProjectCard />)}
      </div>
    </section>
  )
}

export default Project