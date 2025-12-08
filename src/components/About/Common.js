import React from 'react'
import List from './List'
import './Common.css'
const Common = (props) => {
    return (
        <div className="d-flex education-experience">
            <div>
                <ul className='ul-list'>
                    {props.education ? props.education.map((listItem, i) => {
                        return (
                            <>
                                <List key={i} year={listItem.year} college={listItem.college} education={listItem.education} score={listItem.score} branch={listItem.branch} margin = {i>0? '15': '10'}></List>
                                <div className="divider"></div>
                            </>

                        )
                    }) : ""}

                    {props.experience ? props.experience.map((listItem, i) => {
                        return (
                            <>
                                <List key={i} year={listItem.year} client={listItem.client} role={listItem.role} skills={listItem.skills} color='white'></List>
                                <div className="divider"></div>
                            </>

                        )
                    }) : ""}
                </ul>
            </div>

        </div>
    )
}

export default Common