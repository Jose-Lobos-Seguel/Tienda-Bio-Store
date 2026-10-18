import React from "react";

function Input({type = "text", placeholder, 
                value, max, min, onChange, name,
                disabled = false,}) {
    return(
        <input type={type} name={name} placeholder={placeholder}
        value={value} max={max} min={min} onChange={onChange} disabled={disabled}/>
    );
}

export default Input;