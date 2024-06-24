import React from 'react'
import Box from '../Box'
import distanceConverter from '../../../assets/distance-converter.png'
import todoapp from '../../../assets/todoapp.png'
import profileCard from '../../../assets/profile-card.png'
import clock from '../../../assets/clock.png'

const Js = () => {
    const JsProjects = [
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
        {
            title: "Clock Functionality",
            content: "This will not set the time/alarm in your device but here you can observe how hours/minutes hand's position is changing by clicking on the numbers also how clock is changing according to minutes or hours. I created this without using simple image!",
            image: clock,
            url:"https://kaleshreyas45.github.io/set-time/"
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