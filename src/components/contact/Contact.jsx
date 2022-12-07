import React from 'react'
import './contact.css'
import SectionTitle from '../SectionTitle'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id="contact">
      <SectionTitle title="Contact Me" subtitle="Get In Touch" />

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>satyam123.sr@gmail.com</h5>
            <a href="mailto:satyam123.sr@gmail.com"  target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Satyam Rai</h5>
            <a href="https://m.me/satyam.rai.1675"  target="_blank"  rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+91 6362950126</h5>
            <a href="https://api.whatsapp.com/send?phone=6362950126" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name="name" id="name" placeholder='Your Full Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email' required />
          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact