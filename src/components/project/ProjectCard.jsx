import React from 'react'
import Project1 from '../../assets/project1.png'

const ProjectCard = () => {
  return (
    <article className="project__item">
      <div className="project__item-image">
        <img src={Project1} alt="Motor Squad" />
      </div>
      <h3>This is a Project item title</h3>
      <div className="cta">
        <a href="http://github.com" target="_blank" className="btn">Code</a>
        <a href="http://github.com" target="_blank" className="btn btn-primary">Live Demo</a>
      </div>
    </article>
  )
}

export default ProjectCard