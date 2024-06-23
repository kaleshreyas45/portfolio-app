import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Contact.css'

const Contact = () => {
    const contactData = [{
        title: faLinkedin,
        link:"https://www.linkedin.com/in/shreyas-kale-6a6732175/"
    },
    {
        title: faGithub,
        link:"https://github.com/kaleshreyas45"
    },
    {
        title: faInstagram,
        link: "https://www.instagram.com/kaleshreyas45/"
    },
    {
        title: faEnvelope,
        link:"mailto:kaleshreyas45@gmail.com?subject=General Query&body=Hi Shreyas,%0D%0AHope you are doing well%0D%0AMy doubt : <Mention your doubt here>"
    }]

    return (
        <div className="container-fluid contact-section my-5" id="section-5">
            <h1 className="text-center">Contact</h1>
            <div className="common-container">
                {contactData.map((icon, i) => {
                    return (

                        <a href={icon.link} target="_blank" style={{'textDecoration':'none','color':'#212529'}}>
                            <div className="common-shape forContact" style={{ 'borderRadius': '50%', 'boxShadow': 'none' }}>
                                <FontAwesomeIcon icon={icon.title} className="icon"></FontAwesomeIcon>
                            </div>
                        </a>
                    )

                })}

            </div>
        </div>
    )
}

export default Contact