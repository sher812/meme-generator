import React, {useState} from "react"
import memesData from "../memesData";

export default function Meme() {

    const [meme, getMeme] = useState("https://i.imgflip.com/30b1gx.jpg")
    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText: ""
    })

    function handleText(event) {
        const {name, value} = event.target
        setMemeText(prevMeme => {
            return({
                ...prevMeme,
                [name]: value
            })
        })
    }

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
                <input placeholder="Top text" type="text"
                name="topText"
                value={memeText.topText}
                className="meme-top"
                onChange={handleText}/>

                <input placeholder="Bottom text" type="text" 
                name="bottomText"
                value={memeText.bottomText}
                className="meme-bottom"
                onChange={handleText}/>
            </form>

            <button onClick={handleClick}> Get New Meme Image </button>
            <div className="meme-img">
                <img className="meme-pic" src={meme}/>
                <h2 className="text-top"> {memeText.topText} </h2>
                <h2 className="text-bottom"> {memeText.bottomText} </h2>
            </div>
        </div>
    )
}