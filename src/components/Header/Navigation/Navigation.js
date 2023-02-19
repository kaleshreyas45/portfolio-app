import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'
const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [close, setClose] = useState(false)

    const showMobileMenu = () => {
        setMobileMenu(true)
    }
    const closeMobileMenu = function(){
        setMobileMenu(false)
        setClose(true)
    }
    const hideID = function (id) {
        setMobileMenu(false)
        setClose(true)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const hideDesktopID = function (id) {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            {mobileMenu ? <div className="mobile-menu open">
                <div className="close-mobile-menu x" onClick={closeMobileMenu}>X</div>
                <div className="mobile-links">
                    <a onClick={()=>{hideID("section-1")}}>Home</a>
                    <a onClick={()=>{hideID("section-2")}}>About</a>
                    <a onClick={()=>{hideID("section-3")}}>Projects</a>
                    <a onClick={()=>{hideID("section-4")}}>Skills</a>
                    <a onClick={()=>{hideID("section-5")}}>Contact</a>
                </div>
            </div> : close ? <div className="mobile-menu close"></div> : ""}
            <div className="container-fluid top-bar d-flex">
                <div className="container d-flex align-items-center">
                    <div className="mail-phone d-flex align-items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="common-icon"></FontAwesomeIcon>
                        &nbsp;&nbsp;
                        <div>kaleshreyas45@gmail.com</div>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        &nbsp;&nbsp;
                        <div>9665746087</div>


                    </div>

                </div>
            </div>
            <div className="container-fluid navigation-bar d-flex align-items-center" id="navbar">
                <div className="container navItems d-flex align-items-center justify-content-between">
                    <h1 className="brand my-1">Shreyas</h1>
                    <div className="navLinks">

                        <a onClick={()=>{hideDesktopID("section-1")}}>Home</a>
                        <a onClick={()=>{hideDesktopID("section-2")}}>About</a>
                        <a onClick={()=>{hideDesktopID("section-3")}}>Projects</a>
                        <a onClick={()=>{hideDesktopID("section-4")}}>Skills</a>
                        <a onClick={()=>{hideDesktopID("section-5")}}>Contact</a>

                    </div>
                    <div className="hamburger" onClick={showMobileMenu}>
                        <div className="lines"></div>
                        <div className="lines"></div>
                        <div className="lines"></div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navigation