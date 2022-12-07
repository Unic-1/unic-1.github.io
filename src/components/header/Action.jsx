import React from 'react'
import CV from '../../assets/cv.pdf'

const Action = () => {
  return (
    <div className="action">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Have a talk</a>
    </div>
  )
}

export default Action