import React from "react"

export default function Meme() {
    return(
        <div className="meme">
            <form className="meme-form">
                <input type="text" className="meme-top"/>
                <input type="text" className="meme-bottom"/>
            </form>
            <button> Create New Meme </button>
        </div>
    )
}