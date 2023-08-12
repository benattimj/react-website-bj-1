import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <section id='contact'>


<div className="container contact_container">
<div className='contact_options'>

<h5>Entre em contato</h5>
<h2>Fale conosco</h2>

<article className="contact_option">
    <h4>Email</h4>
    <h5>benatti1104@gmail.com</h5>
    <a href="mailto:benatti1104@gmail.com"> Envie um email</a>
</article>

<article className="contact_option">
    <h4>Messenger</h4>
    <h5>Murilo Services</h5>
    <a href="https://m.me/murilo.benattig.980" target="_blank" rel="noopener noreferrer"> Send a message</a>
</article>

<article className="contact_option">
    <h4>WhatsApp</h4>
    <h5>Murilo Contact</h5>
    <a href="https://api.whatsapp.com/send/?phone=5534999047919&text&type=phone_number&app_absent=0" classname='btn btn-prymary'> Send a message</a>
    </article>
  </div>

<form action="">
          <div className="contact_option">
            <h4>Full Name</h4>
            <input type="text" name='name' placeholder='Your Full Name' required />
          </div>

          <div className="contact_option">
            <h4>Your Email</h4>
            <input type="email" name='email' placeholder='Your Email' required />
          </div>

          <div className="contact_option">
            <h4>Your Message</h4>
            <textarea name="message" rows="7" placeholder='Your Message' required />
          </div>

          <div className="contact_option">
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact