import React from 'react'


const SocialLinks = ({links}) => {
  return (
    <div className="header__socials">
      {links.map(link => {
        return <a href={link.url} target="_blank" rel="noreferrer">{link.icon}</a>
      })}
    </div>
  )
}

export default SocialLinks