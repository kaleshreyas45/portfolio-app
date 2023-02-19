import React from 'react'
import Box from '../Box'
import jioSaavan from '../../../assets/jioSaavan.png'
import netflix from '../../../assets/netflix.png'
import google from '../../../assets/google.png'
const HtmlCss = () => {
    const htmlCssProjects = [
        {
            title: "Jio Saavn Logo",
            content: "This is Jio Saavn Logo created using Html and Css without using any single icon or image! I have also added little animation to this logo. Please have a look!",
            image: jioSaavan,
            url:"https://kaleshreyas45.github.io/jioSaavanLogo/"
        },
        {
            title: "Google Logo",
            content: "This is Google Logo created using Html and Css without using any single icon or image! I have also added little animation to this logo. Please have a look!",
            image: google,
            url:"https://kaleshreyas45.github.io/googleLogo/"
        },
        {
            title: "Netflix Logo",
            content: "This is Netflix Logo created using Html and Css without using any single icon or image! I have also added little animation to this logo. Please have a look!",
            image: netflix,
            url:"https://kaleshreyas45.github.io/netflixLogo/"
        }
    ]
    return (
        <div className="row project-row my-lg-0 d-flex" style={{'padding':'1rem'}}>{htmlCssProjects.map((project,i)=>{
            return(
                <Box key={i} title={project.title} content={project.content} image={project.image} url={project.url}></Box>
            )
        })}</div>
    )
}

export default HtmlCss