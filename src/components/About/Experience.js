import React from 'react'
import Common from './Common'


const Experience = () => {
    const experience = [{
        year:'2022-2025',
        client:'Verizon',
        role:'Software Engineer',
        skills:'MERN Stack',
    },

    {
        year:'2020(Aug-Oct)',
        client:'Brandup Digital Marketing',
        role:'Intern',
        skills:'HTML, CSS, JS, Bootstrap, PHP, MYSQL, Wordpress'
    }
]
  return (
    <div className="experienceBg">
      <Common experience={experience}></Common>
    </div>
    
  )
}

export default Experience