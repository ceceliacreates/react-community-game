import React from "react";
import characters from "../characters.json"

function Images (props) {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      const shuffledArray = shuffle(characters);

    return(
        <div className="image-container">
            {shuffledArray.map(item => (
                <img src={item.image} id={item.id} key={item.id} onClick={props.handleClick} alt={item.name}></img>
            ))}
        </div>
    )
}

export default Images;