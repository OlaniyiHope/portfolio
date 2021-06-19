import React from 'react'
import styles from "./contact.scss"

import cop1 from "../assets/12.jpg"


export const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="left">
            <img src={cop1} alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form>
                    <input type="text" placeholder="Email"></input>
                    <textarea type="text" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
