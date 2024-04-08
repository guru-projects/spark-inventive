import React from 'react'
import './Contact.css'
import call from '../../assets/call.svg';
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';

function Contact() {

  return (
    <div className='contact' id='contact'>
        <div className='contactSection'>
            <div className='details underline'><h1>Contact Us</h1></div>
            <div className="contactInfo">
                <div className='details'>
                    <img src={call} alt="call" />
                    <p>+ 123 (456) 789</p>
                </div>
                <div className='details'>
                    <img src={email} alt="email" />
                    <p>info@example.com</p>
                </div>
                <div className='details'>
                    <img src={location} alt="location" />
                    <p>Chennai, TamilNadu, India</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact