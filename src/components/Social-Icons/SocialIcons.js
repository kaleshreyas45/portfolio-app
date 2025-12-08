import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './SocialIcons.css'
const SocialIcons = () => {
    return (
        <div className="social-icons-fixed d-flex flex-column justify-content-center align-items-center">
            <a href="https://www.linkedin.com/in/shreyas-kale-6a6732175/" target="_blank">
                <div className="icon-shape d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </div>
            </a>
            <a href="https://github.com/kaleshreyas45" target="_blank">
                <div className="icon-shape d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </div>
            </a>
            <a href="mailto:shreyas9320@gmail.com?subject=General Query&body=Hi Shreyas,%0D%0AHope you are doing well%0D%0AMy doubt : <Mention your doubt here>" target="_blank">
                <div className="icon-shape d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </div>
            </a>
         
        </div>
    )
}

export default SocialIcons