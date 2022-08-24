import React, {useState} from "react"
import memesData from "../memesData";

let url = ""
export default function Meme() {

    const [meme, getMeme] = useState("https://i.imgflip.com/30b1gx.jpg")

    function handleClick() {
        const memeLength= memesData.data.memes.length
        const randMeme = Math.floor(Math.random()*memeLength)
        const memeURL = memesData.data.memes[randMeme].url

        console.log(meme)
        getMeme(memeURL)
    }

    return(
        <div className="meme">
            <form className="meme-form">
                <input placeholder="Top text" type="text" className="meme-top"/>
                <input placeholder="Bottom text" type="text" className="meme-bottom"/>
            </form>
            <button onClick={handleClick}> Get New Meme Image </button>
            <img className="meme-img" src={meme}/>
        </div>
    )
}