import React from 'react'
import Common from './Common'
import './Experience.css'

const Experience = () => {
    const experience = [{
        year:'2022(Current)',
        company:'Infosys',
        role:'Specialist Programmer',
        skills:'MERN Stack',
    },

    {
        year:'2020(Aug-Oct)',
        company:'Brandup Digital Marketing',
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