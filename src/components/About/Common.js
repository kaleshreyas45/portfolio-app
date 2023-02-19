import React from 'react'
import List from './List'
import './Common.css'
const Common = (props) => {
  return (
    <div className="d-flex education">
            <div>
                <ul>
                    {props.education?props.education.map((listItem,i)=>{
                        return (
                        <List key={i} year={listItem.year} college={listItem.college} education={listItem.education} score={listItem.score} branch={listItem.branch}></List>
                        )
                    }):""}

                    {props.experience?props.experience.map((listItem,i)=>{
                        return (
                            <List key={i} year={listItem.year} company={listItem.company} role={listItem.role} skills={listItem.skills}color='white'></List>
                        )
                    }):""}
                </ul>
            </div>

        </div>
  )
}

export default Common