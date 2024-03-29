import React from "react";
import './button.css'

const Button = ({
    onClick= () => {},
    label,
    disabled = true
}) => {
    return (
        <button onClick={onClick} disabled={!!disabled}>{label}</button>
    );
}

export default Button;