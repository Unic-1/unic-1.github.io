import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';


const SkillItem = ({skill, level}) => {
  return (
    <article className='experience__details'>
      <BsPatchCheckFill />
      <h4>{skill}</h4>
      <small className='text-light'>{level}</small>
    </article>
  )
}

export default SkillItem