import React, { useState } from 'react'
import './About.css'

import Popup from '../Popup/Popup'
const About = () => {
    const [education,setEducation] = useState(false)
    const [experience,setExperience] = useState(false)
    const showEducation = () =>{
        setEducation(true)
        setExperience(false)
        document.body.style.overflow = "hidden"
    }
    const showExperience = () =>{
        setExperience(true)
        setEducation(false)
        document.body.style.overflow = "hidden"
    }
    const removePopup = () =>{
        setExperience(false);
        setEducation(false)
    }

    return (
        
        <div className="container-fluid about-section" id='section-2'>
            <h1 className="text-center">About</h1>
            <div className="text my-5">
                <p>Hi, myself Shreyas Kale and I completed my graduation from All India Shri Shivaji Memorial Society, Institute of Information Technolgy Pune in 2022 in Information Technolgy. I am passionate Web Developer and taking one step forward to the Web Development by learning latest technologies such like react js and node js. I am always very excited to learn new technology.</p>
            </div>
            {education?<Popup education="Education" removePopup = {removePopup}></Popup>:""}
            {experience?<Popup experience="Experience" removePopup = {removePopup}></Popup>:""}
            <div className="buttons d-flex justify-content-center">
                
                <button className="common-button" onClick={showExperience}>Experience</button>
                <button className="common-button-light mx-2" onClick={showEducation}>Education</button>
            </div>
        </div>
    )
}

export default About