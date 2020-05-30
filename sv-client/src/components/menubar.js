import React from 'react'
import homelogo from '../assets/images/browser.svg'
import searchlogo from '../assets/images/loupe.svg'
import addlogo from '../assets/images/plus.svg'
import userlogo from '../assets/images/user.svg'

export const Menubar = () => {

    function displayForm() {
        const form = document.getElementById('addFeedForm')
        form.style.display = form.style.display === "block"? "none" : "block"
    }

    return (
        <div className="menu-container">
            <div className="menu-items-container">
                <ul>
                    <li><button className="menu-buttons"><img src={homelogo} alt="home" className="menu-logos" /></button></li>
                    <li><button className="menu-buttons"><img src={searchlogo} alt="search" className="menu-logos" /></button></li>
                    <li><button className="menu-buttons" onClick={()=> displayForm()}><img src={addlogo} alt="add" className="menu-logos" /></button></li>
                    <li><button className="menu-buttons"><img src={userlogo} alt="user" className="menu-logos" /></button></li>
                </ul>
            </div>
        </div>
    )
}