import React from 'react'
import "./testimonial.scss"

import eight from "../assets/8.png"
import nine from "../assets/9.jpg"
import ten from "../assets/10.jpg"


export const Testimonial = () => {
    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                    
                    <img src={nine} className="user" alt="" />
                   
                    </div>
                    <div className="center">He's ready to learn, teachable, creative loves improving on himself daily</div>
                    <div className="bottom">
                        <h3>Gideon</h3>
                        <h4>CEO 5hype blog</h4>
                        <h5></h5>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                
                    <img src={ten} className="user" alt="" />
                   
                    </div>
                    <div className="center">His code are well arranged and organized, simplified for other users to understand</div>
                    <div className="bottom">
                        <h3>Love</h3>
                        <h4>Friend</h4>
                        <h5></h5>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                 
                    <img src={eight} className="user" alt="" />
                  
                    </div>
                    <div className="center">He delivers on time and good to work with, hes also good at what he does(front-end development)</div>
                    <div className="bottom">
                        <h3>David</h3>
                        <h4>CEO Lands and Creations</h4>
                        <h5></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
