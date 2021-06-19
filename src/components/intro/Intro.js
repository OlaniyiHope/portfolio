import React from 'react'
import "./intro.scss"
import copp from "../assets/good.JPG"
import style from "./intro.scss"
export const Intro = () => {
    return (
        <div className="int" id="intro">
          <div className="left">
              <div className="imgContainer">
              <img src={copp} alt="" />
              </div>
          </div>
          <div className="right">
              <div className="wrapper">
                  <h2>Hi There</h2>
                  <h1>Hope Olaniyi</h1>
                  <h3>Front-End Developer<span></span></h3>
              </div>
              <a href=""></a>
          </div>
        </div>
    )
}
