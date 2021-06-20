import React from 'react';
import "./portfolio.scss";
import app1 from "../assets/tmm.png";
import app2 from "../assets/takee.png";
import app3 from "../assets/cat.jpg";
import app4 from "../assets/sch.png";
import app5 from "../assets/blog1.png";

import app6 from "../assets/food.png";


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
                <img src={app1} alt="" />
                    <h3>Transport App</h3>
                </div>
                <div className="item">
                <img src={app2} alt="" />
                    <h3>Ecommerce App</h3>
                </div>
                <div className="item">
                <img src={app3} alt="" />
                    <h3>Non-profit App</h3>
                </div>
                <div className="item">
                <img src={app4} alt="" />
                    <h3>Educational App</h3>
                </div>
                <div className="item">
                <img src={app5} alt="" />
                    <h3>Blog Project</h3>
                </div>
                <div className="item">
                <img src={app6} alt="" />
                    <h3>Food Website</h3>
                </div>
            </div>
        </div>
    )
}
