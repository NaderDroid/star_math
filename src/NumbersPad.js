import React from "react";

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
}
const NumbersPad = (props) => {
    return (
        <button
            onClick={() => props.onClick(props.number, props.status)}
            style={{backgroundColor: colors[props.status]}}
            key={props.number}
            className={'number'}>{props.number}
        </button>

    )
}
export default NumbersPad