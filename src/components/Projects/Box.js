import React from 'react'
import './Box.css'
const Box = (props) => {
    return (
        <div className="my-2 box d-flex flex-column justify-content-center align-items-center" style={{'padding':'1rem 0rem'}}>
            <img src={props.image} className="mockup"></img>
            <h4 className="my-4">{props.title}</h4>
            <p className="text-center content my-2">{props.content}</p>
            <a className="my-2" href={props.url} target="_blank"><button className="common-button">Visit</button></a>
        </div>

    )
}

export default Box