import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <section className='title__section' >
      <h5>{subtitle}</h5>
      <h2>{title}</h2>
    </section>
  )
}

export default SectionTitle