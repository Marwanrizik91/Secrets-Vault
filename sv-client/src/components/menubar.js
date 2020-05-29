import React from 'react'
import homelogo from '../assets/images/browser.svg'
import searchlogo from '../assets/images/loupe.svg'
import addlogo from '../assets/images/plus.svg'
import userlogo from '../assets/images/user.svg'

export const Menubar = () => {
    return (
        <div className="menu-container">
            <div className="menu-items-container">
                <ul>
                    <li><img src={homelogo} alt="home" className="menu-logos"/></li>
                    <li><img src={searchlogo} alt="search" className="menu-logos"/></li>
                    <li><img src={addlogo} alt="add" className="menu-logos"/></li>
                    <li><img src={userlogo} alt="user" className="menu-logos"/></li>
                </ul>
            </div>
        </div>
    )
}