import React from 'react'
import './About.css'
import pattern from '../../assets/theme_pattern.svg'
import title from '../../assets/profile.jpeg'
const About = () => {
  return (
    <div id='about'className='about'>
      <div className="title">
        <h1>About me</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="aboutsection">
        <div className="about-left">
            <img src={title} alt="" className='imgtitle'/>
        </div>
        <div className="about-right">
<div className='about-para'>
    <p>As an Information Science engineering student at Dayananda Sagar College of Engineering, I am passionate about leveraging technology to drive innovation and create impactful solutions. With a keen interest in finance, business, and marketing, coupled with proficiency in MERN Stack development and competitive programming, I am equipped with a versatile skill set to tackle complex challenges.
</p>

    <p>Additionally, my expertise in Data Structures and Algorithms further strengthens my problem-solving capabilities, ensuring robust and efficient solutions.</p>
    <p>My proactive engagement in public speaking, networking, and participation in tech events has honed my communication and leadership abilities, while my exposure to startup talks and business meetings has provided invaluable insights into the entrepreneurial landscape.</p>

</div>
<div className="about-skills">
    <div className="about-skill">
        <p>HTML,CSS </p><hr style={{width:"80%"}} />
    </div>
    <div className="about-skill">
        <p>Javascript</p><hr style={{width:"70%"}} />
        
    </div>
    <div className="about-skill">
        <p>TailwindCSS</p><hr style={{width:"50%"}} />
        
    </div>
    <div className="about-skill">
        <p>React JS</p><hr style={{width:"80%"}} />
        
    </div>
    <div className="about-skill">
        <p>C++ </p><hr style={{width:"90%"}} />
        
    </div>
    <div className="about-skill">
        <p>MongoDB </p><hr style={{width:"60%"}} />
        
    </div>
    <div className="about-skill">
        <p>NodeJS </p><hr style={{width:"40%"}} />
        
    </div>
    <div className="about-skill">
        <p>Express </p><hr style={{width:"50%"}} />
        
    </div>
</div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>
250+
            </h1>
            <p>
DSA Problems
            </p>
            </div>
            
          <div className="about-achievement">
          <h1>
Competitive 
Programming
            </h1>
            <p>
CodeChef: 2* (1532), Codeforces: Newbie, LeetCode: 200+Problems
            </p>
          </div>
            <div className="about-achievement">
            <h1>
Genesis
            </h1>
            <p>
            PR/Marketing & Social Media Lead
            </p>
            </div>
            <div className="about-achievement">
            <h1>
MoodIndigo
            </h1>
            <p>
         Contigent Leader, MI Member
            </p>
            </div>
        
      </div>
    </div>
  )
}

export default About
