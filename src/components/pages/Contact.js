import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import './Contact.css'

export default function Contact() {
        return (
            <div className='contact-container'>
              <div className='image-sub'>
                <img className='meAgain' src='img/me.jpeg'></img>
              </div>
            
              <div class='contact-links'>
                <div className='contact-link-wrapper'>
                  
                  <div class='contact-link-items'>
                    <h2>Phone Number</h2>
                    <Link to='/linkedin' target="_blank">(219) 240-7530</Link>
                  </div>
                  <div class='contact-link-items'>
                    <h2>Emails</h2>
                    <Link to='/yahoo'>julienmiranda74@yahoo.com</Link>
                    <Link to='/gmail'>miranda9@pnw.edu</Link>
                  </div>
                </div>
                <div className='contact-link-wrapper'>
                  
                </div>
              </div>
            </div>
          );

}