import React from 'react'
import './Footer.css'
import footer from '../../assets/footer_logo.svg'
import icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo.jpeg'
const Footer = () => {
    
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" className='LOGO'/>
           
            <p>I'm Akshiv Bansal, frontend Developer and an Engineering Student having a good interest in MERN Stack development and competitive programming.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email">
                <img src={icon} alt="" />
                <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">
                Subscribe
            </div>
            </div>
          
       
        </div>
        <hr />
        <div className="footer-bottom">
          <p className='footer-left'>© 2024 Akshiv Bansal. All rights reserved.</p>
          <div className="footer-right">
            <p>Terms Of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
            </div>  
        </div>
    
    </div>
  )
}

export default Footer
