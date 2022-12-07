import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';


const SkillItem = ({skill, level}) => {
  return (
    <article className='experience__details'>
      <BsPatchCheckFill className='experience__details-icon'/>
      <div>
        <h4>{skill}</h4>
        <small className='text-light'>{level}</small>
      </div>
    </article>
  )
}

export default SkillItem