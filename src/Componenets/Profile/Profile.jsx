import React from 'react'
import'./Profile.css'
import image from '../../assets/profile.jpeg'
import { Link } from 'react-scroll';
const Profile = () => {
  return (
    <div id='home'className='hero'>
        <img src={image} alt="" />
        <h1> <span>I'm Akshiv Bansal</span>, MERN Developer and an Engineering Student </h1>
        <p> I have good interest in finance, business, and marketing, coupled with proficiency in MERN Stack development and competitive programming</p>
        <div className="heroaction">
        <div className="heroconnect">
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
          >
            Connect with me
          </Link>
        </div>
        
            <div className="heroresume">
            <a href="https://drive.google.com/file/d/1Fc6vb_5QkND3kMzlwvTbfpY8CMbZLGFu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
                
                </div>
        </div>
    </div>
  )
}

export default Profile
