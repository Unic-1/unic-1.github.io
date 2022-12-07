import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi';
import {FaRegUser} from 'react-icons/fa';
import {SlEnergy} from 'react-icons/sl';
import {CgWebsite} from 'react-icons/cg';
import {MdOutlineContactPhone} from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href="#hero"><BiHomeAlt /></a>
      <a href="#about"><FaRegUser/></a>
      <a href="#experience"><SlEnergy/></a>
      <a href="#project"><CgWebsite/></a>
      <a href="#contact"><MdOutlineContactPhone/></a>
    </nav>
  )
}

export default Nav