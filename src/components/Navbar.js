import React from "react";

export default function Navbar() {
    return(
        <nav className="nav-bar">
            <span className="nav-left">
            <img src="./images/troll-face.png" alt="troll-face" className="troll-face"/>
            <p className="nav-title">
                Meme Generator
            </p>
            </span>
            <span className="nav-right">
                <p>
                    React Course - Project 3
                </p>
            </span>
        </nav>
    );
}