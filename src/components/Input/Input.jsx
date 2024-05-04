import React from "react";
import './input.css'

const Input = ({span}) => {
    return(
        <div className="group">
            <input required="" type="text" className="input"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
        </div>
    )
}

export default Input