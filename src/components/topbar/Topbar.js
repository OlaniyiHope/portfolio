import React from 'react'
import style from "./topbar.module.scss"
import { Link } from "react-router-dom";

import {Person, Mail} from "@material-ui/icons";
export const Topbar = () => {
    return (
        <div className={style.Topbar}>
           <div className={style.wrapper}>

               <div className={style.left}>
          
               <a href="#intro" className={style.logo}>HOPPEE</a>
               <div className={style.itemContainer}>

                  <Person className={style.icon}></Person>
                  <span>+2347038412640</span>
               </div>
               <div className={style.itemContainer}>

                  <Mail className={style.icon} />
                  <span>olaniyihoppee@gmail.com</span>
               </div>
               </div>
             
               <div className={style.right}>
          <div className={style.hamburger}>
        <span className={style.line1}></span>
        <span className={style.line2}></span>
        <span className={style.line3}></span>


          </div>
               </div>
           </div>
        </div>
    )
}
