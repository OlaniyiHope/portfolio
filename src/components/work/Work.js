import React from 'react'
import "./work.scss"


import cop3 from "../assets/safe.png"



export const Work = () => {
    return (
        <div className="work" id="work">
            <div className="slider">
            <div className="container">
                <div className="item">
                <div className="left">
            <div className="leftContainer">
        <div className="imgContainer">
        <img src={cop3} alt="" />
        </div>
        <h2>Web Applicatons</h2>
        <p>I build, test and deploy great web application interface for your company, both as a user and as an admin</p>
        <span>Projects</span>
            </div>

                </div>
                <div className="right">
                <img src={cop3} alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
