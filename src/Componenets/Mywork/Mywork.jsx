import React from 'react'
import './Mywork.css'
import pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow  from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work'className='mywork'>
      <div className="title">
        <h1> Mylatest Work </h1>
    <img src={pattern} alt="" />

      </div>
      <div className="mywork-container">
{mywork_data.map((work,index)=>{
    return <img  key={index} src={work.w_img}/>
})}
      </div>
      <div className="myworkshowmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default Mywork
