import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

import DP from '../../assets/dp.jpg';
import InfoCard from './InfoCard';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={DP} alt="profile" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <InfoCard title="Experience" subtitle="4+ Years Working" icon={<FaAward />} />
            <InfoCard title="Clients" subtitle="200+ Worldwide" icon={<FiUsers />} />
            <InfoCard title="Projects" subtitle="80+ completed" icon={<VscFolderLibrary />} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas accusamus perspiciatis fuga distinctio dolores qui a quidem illo, natus vero repellat autem dolorum illum facere unde consequatur vel velit.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About