import React from 'react'
import './List.css'
const List = (props) => {
  
  return (
    <li className="list"><span className="year">({props.year})</span><br></br><span className="desc">{props.college?`College : ${props.college}`:""}{props.company?`Company : ${props.company}`:""}<br></br>{props.education?`Education : ${props.education}`:""}{props.role?`Role : ${props.role}`:""}<br></br> {props.branch?`Branch : ${props.branch}`:""}{props.branch?<br></br>:""}{props.score?`Score : ${props.score}`:""}{props.skills?`Skills : ${props.skills}`:""}</span></li>
  )
}

export default List