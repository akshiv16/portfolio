import React from 'react'
import './Contact.css'
import pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'
import Linkedin from'../../assets/linkedin-svgrepo-com.svg'
import git from'../../assets/github-142-svgrepo-com.svg'
import Insta from'../../assets/instagram-svgrepo-com.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3aa6a0f3-ed65-4960-85e1-5bd8bdb033ae");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>
            Get In Touch
        </h1>
        <img src={pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>
               Let's Talk 
            </h1>
            <p>
            Let's connect and explore opportunities to collaborate and drive positive change together. You can contact me anytime.
            </p>
            <div className="contact-details">
                <div className="contact-detail">
<img src={mail_icon} alt="" /><p>akshivbansal9084@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call} alt="" /><p>9084311021</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="" /><p>Bengaluru,Karnataka</p>
                </div>
                <div className='links'>
                <a href="https://www.linkedin.com/in/akshiv-bansal-b92b49222/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn" className='linked'/>
        </a>
        <a href="https://github.com/akshiv16" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="GitHub" className='github'/>
        </a>
        <a href="https://www.instagram.com/_.akshiv.__/" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" className='insta'/>
        </a>
                   
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit}action="" className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your Email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message' id=""></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
