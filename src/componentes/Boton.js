import React from "react";

const Button = (props) => {
    return <button onClick = {props.clickcomprar}>{props.label}</button>
}

export default Button;