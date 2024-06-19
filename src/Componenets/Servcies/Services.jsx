import React from 'react'
import'./Services.css'
import pattern from'../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow from'../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>
                My Services
            </h1>
            <img src={pattern} alt="" />
        </div>
      <div className="service-container">
{Services_Data.map((service,index)=>{
    return <div key={index} className="services-format">
        <h3>{service.s_no}</h3>
        <h2>{service.s_name}</h2>
        <p>{service.s_desc}</p>
        <div className='services-readmore'>
    <p>Read More</p>
    <img src={arrow} alt="" />
        </div>
    </div>
})}
      </div>
    </div>
  )
}

export default Services
