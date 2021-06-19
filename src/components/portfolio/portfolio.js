import React from 'react'
import "./portfolio.scss"
import cop1 from "../assets/food.png"
import cop2 from "../assets/fox.png"
import cop3 from "../assets/safe.png"
import cop4 from "../assets/takee.png"
import cop6 from "../assets/takee.png"
import cop5 from "../assets/sch.png"





export const Portfolio = () => {
    return (
        <div className="port" id="poerfolio">
            <h1>Portfolio</h1>
            <ul>
                <li >Featured</li>
                <li className="active">Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                <img src={cop1} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                <img src={cop2} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                <img src={cop3} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                <img src={cop4} alt="" />
                    <h3>Ecommerce App</h3>
                </div>
                <div className="item">
                <img src={cop5} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                <img src={cop6} alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
