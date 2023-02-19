import React from 'react'
import ProfileImage from '../../assets/Profile.png'
import { headerSkills } from '../Skills/Data'
import './Header.css'
const Header = () => {
    const redirectToContact = function(id){
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className="container-fluid header-section" id='section-1'>
            <div class="custom-shape-divider-bottom-1673671527">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="container header">
                <div className="row header-row d-flex ">
                    <div className="col-md-5 header-col d-flex justify-content-center">
                        <div className="my-info">
                            <p>Hi,</p>
                            <div className="d-flex align-items-center">
                                <h1>I am</h1>
                                &nbsp;&nbsp;
                                <span className="letter-span">S</span>
                                <span className="letter-span">h</span>
                                <span className="letter-span">r</span>
                                <span className="letter-span">e</span>
                                <span className="letter-span">y</span>
                                <span className="letter-span">a</span>
                                <span className="letter-span">s</span>
                            </div>
                            

                            <h1>Web Developer</h1>
                            <h4>Specialist Programmer @Infosys</h4>
                            <button className="common-button" onClick={()=>{redirectToContact("section-5")}}>Contact Me</button>
                        </div>

                    </div>
                    <div className="col-md-5 header-col d-flex justify-content-center align-items-center">

                        <div className="profile-image" style={{ 'background': `url(${ProfileImage}) no-repeat center center/cover` }}>
                            {headerSkills.map((skill,i) => {

                                return (
                                    <div className={`logo ${skill.title}`}>
                                        <img src={skill.img} className="logo-img"></img>
                                    </div>
                                )
                            })}

                            {/* <div className="logo css" >
                                <img src={css} className="logo-img"></img>
                            </div>
                            <div className="logo bootstrap" >
                                <img src={bootstrap} className="logo-img"></img>
                            </div>
                            <div className="logo js">
                                <img src={js} className="logo-img"></img>
                            </div>
                            <div className="logo react" >
                                <img src={react} className="logo-img"></img>
                            </div>
                            <div className="logo mongo" >
                                <img src={mongo} className="logo-img"></img>
                            </div>
                            <div className="logo node" >
                                <img src={node} className="logo-img"></img>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header