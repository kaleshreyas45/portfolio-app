import React from 'react'
import Box from '../Box'
import distanceConverter from '../../../assets/distance-converter.png'
import todoapp from '../../../assets/todoapp.png'
import profileCard from '../../../assets/profile-card.png'

const Js = () => {
    const JsProjects = [
        {
            title: "Profile Card",
            content: "This is my profile card. I applied typing effects with js and some cool animation effects with css. Please watch this on desktop only to have better experience!",
            image: profileCard,
            url:"https://short-profile-card.netlify.app/"
        },
        {
            title: "Distance Converter",
            content: "This is basic Distance Converter project which will give you exact distance in different units.The purpose of this project is to practice input event in javascript!",
            image: distanceConverter,
            url:"https://kaleshreyas45.github.io/Distance_Converter/"
        },
        {
            title: "To Do",
            content: "This is To Do project. I know it is very common😂 but if you want to practice click events, getting values from input field, search functionality in js, localStorage api,etc then you must create this! ",
            image: todoapp,
            url:"https://kaleshreyas45.github.io/to-do-list/"
        },
        
    ]
    return (
        <div className="row project-row my-lg-0 d-flex" style={{'padding':'1rem'}}>{JsProjects.map((project,i)=>{
            return(
                <Box key={i} title={project.title} content={project.content} image={project.image} url={project.url}></Box>
            )
        })}</div>
    )
}

export default Js