import React from 'react'
import { useState } from 'react'
import Line from '../About/Line'
import Education from '../About/Education'
import Experience from '../About/Experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLaptop } from '@fortawesome/free-solid-svg-icons'
import './Popup.css'
const Popup = (props) => {
    const closePopup = () => {
        console.log("clicked")
        props.removePopup()
    }
        return (
            <div className="backdrop">
                <div className="popup">
                    <div className="x" onClick={closePopup}>X</div>
                    <div className="d-flex" style={{ 'position': 'relative' }}>
                        {props.education ? <><h4 style={{ 'position': 'absolute' }}>Education <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></h4>
                            <div className="d-flex" style={{ 'marginTop': '3rem' }}>
                                <Education></Education>
                            </div></> : ""}
                        {props.experience ? <><h4 style={{ 'position': 'absolute'}}>Experience <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></h4>
                            <div className="d-flex" style={{ 'marginTop': '3rem' }}>
                                <Experience></Experience>
                            </div></> : ""}

                    </div>
                </div>
            </div>
        )
}

export default Popup