import React from "react";
import characters from "../characters.json"

function Images () {
    return(
 characters.map(item => (
     <img src={item.image} id={item.id}></img>
 ))
    )
}

export default Images;