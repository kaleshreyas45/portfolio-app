import React from 'react'
import Common from './Common'
import './Education.css'
const Education = () => {
    const education = [{
        year:'2018-22',
        college:'AISSMS, Institute of Information Tehnology, Pune',
        education:'BE',
        branch:'Information Technology',
        score:'8.97 CGPA' 
    },

    {
        year:'2017-18',
        college:'Siddharth Junior College, Tq : Jafrabad, Dist : Jalna',
        education:'HSC',
        branch:'Science',
        score:'77.23%'
    },
    {
        year:'2016',
        college:'Swami Vivekanada, Tq : De-Raja, Dist : Buldana',
        education:'SSC',
        score:'93.80%',
        branch:null
    }
]
    return (
        <div className="educationBg">
            <Common education={education}></Common>
        </div>
        
    )
}

export default Education