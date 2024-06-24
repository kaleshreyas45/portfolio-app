import React, { useState } from 'react'
import ReactProject from './React+Bootstrap/ReactProject'
import HtmlCss from './HTML+CSS/HtmlCss'
import './Project.css'
import Js from './JS/Js'

const Project = () => {
    const [react, setReact] = useState(true)
    const [htmlCss,setHtmlCss] = useState(false)
    const [js,setJs] = useState(false)
    const toggleProject = (project) => {
        if(project=="react"){
            setHtmlCss(false)
            setJs(false)
            setReact(true)
        }
        else if(project=="htmlcss"){
            setHtmlCss(true)
            setJs(false)
            setReact(false)
        }
        else if(project=="js"){
            setJs(true)
            setReact(false)
            setHtmlCss(false)
        }
        
    }
    return (
        <div className="container-fluid project-section" id='section-3'>
            <div className="container">
                <h1 className="text-center">Basics</h1>
                <div className="d-flex tab-list justify-content-center">
                    <div className="d-flex my-3 tab-list-container justify-content-between">
                        <div className={react ? "active-project" : ""} onClick={()=>{toggleProject("react")}}>React+Bootstrap</div>
                        <div className={htmlCss ? "active-project" : ""} onClick={()=>{toggleProject("htmlcss")}}>HTML+CSS</div>
                        <div className={js ? "active-project" : ""} onClick={()=>{toggleProject("js")}}>Javascript</div>
                    </div>
                </div>
                {react ? <ReactProject></ReactProject> : ""}
                {htmlCss ? <HtmlCss></HtmlCss> : ""}
                {js ? <Js></Js> : ""}
            </div>

        </div>
    )
}

export default Project