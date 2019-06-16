import React from "react";
import characters from "../characters.json"

function Images () {
    return(
        <div className="image-container">
            {characters.map(item => (
                <img src={item.image} id={item.id} key={item.id}></img>
            ))}
        </div>
    )
}

export default Images;