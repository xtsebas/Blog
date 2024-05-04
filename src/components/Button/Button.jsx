import React from "react";
import './Button.css'

const Button = ({texto}) => {
    return(
        <button className="button type1">
            <span className="btn-txt">{texto}</span>
        </button>
    )
}

export default Button