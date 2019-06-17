import React from "react";

function Scores (props) {
    return (
        <div className="scores">
            <h2>Game Score: {props.currentScore}</h2>
            {props.message === "Sorry, you Britta'd it! Click an image to start over." ? <p style={{color: "red"}}>{props.message}</p> : <p>{props.message}</p>}
            <h2>Top Score: {props.topScore}</h2>
        </div>
    )
}

export default Scores;