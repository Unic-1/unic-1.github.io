import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi';
import {FaRegUser} from 'react-icons/fa';
import {SlEnergy} from 'react-icons/sl';
import {CgWebsite} from 'react-icons/cg';
import {MdOutlineContactPhone} from 'react-icons/md';

const Nav = () => {
  const [activeTab, setActiveTab] = React.useState('#hero')

  function isActive(tab) {
    return activeTab === tab ? 'active' : ''
  }
  return (
    <nav>
      <a href="#hero" className={isActive('#hero')} onClick={() => setActiveTab('#hero')}><BiHomeAlt /></a>
      <a href="#about" className={isActive('#about')} onClick={() => setActiveTab('#about')}><FaRegUser/></a>
      <a href="#experience" className={isActive('#experience')} onClick={() => setActiveTab('#experience')}><SlEnergy/></a>
      <a href="#project" className={isActive('#project')} onClick={() => setActiveTab('#project')}><CgWebsite/></a>
      <a href="#contact" className={isActive('#contact')} onClick={() => setActiveTab('#contact')}><MdOutlineContactPhone/></a>
    </nav>
  )
}

export default Nav