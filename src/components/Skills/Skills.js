import React from 'react'
import { skillsData } from './Data'
import './Skills.css'
const Skills = () => {
  
    return (
        <div className="container-fluid skills" id='section-4'>
            <div class="custom-shape-divider-top-1674190480">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="container skills-section">
                <h1 className="text-center my-3">Skills</h1>
                <div className="skill-container common-container">
                    {skillsData.map((skill, i) => {
                        return (
                            <div className="skill-info">
                                <div className="skill-shape common-shape">
                                    <img src={skill.img} className="skill-image"></img>
                                </div>
                                <p>{skill.title}</p>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Skills