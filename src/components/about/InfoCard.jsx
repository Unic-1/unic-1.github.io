import React from 'react'

const InfoCard = ({title, subtitle, icon}) => {
  return (
    <article className='about__card'>
      {icon}
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </article>
  )
}

export default InfoCard