import React from 'react'
import './header.css'

import Action from './Action'
import SocialLinks from './SocialLinks'
import DP from '../../assets/dp.jpg'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs'

const links = [{url: 'https://www.linkedin.com/in/satyam-rai-0b4708110/', icon: <BsLinkedin />, label: 'LinkedIn'},
{url: 'https://github.com/Unic-1', icon: <BsGithub />, label: 'Github'},
{url: 'https://medium.com/@satyam123.sr', icon: <BsMedium />, label: 'Medium'}]

const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Satyam Rai</h1>
         <h5 className="text-light">Fullstack Developer</h5>
         <Action />

         <div className="dp">
          <img src={DP} alt="profile"/>
         </div>

         <a href="#contact" className='scroll__down'>Scroll Down</a>

          <SocialLinks links={links} />
      </div>
    </header>
  )
}

export default Header