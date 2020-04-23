import React from "react";
import './main.css'

const PlayAgain = props => {
    return (
        <div className="game-done">
            <div className="message"
                 style={{color:props.gameStatus === 'won' ? 'green' : 'red'}}
            >
                <div>
                    {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
                </div>
            </div>
            <button onClick={props.onClick}>Play Again</button>
        </div>

    )
}
export default PlayAgain