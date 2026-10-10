import React from "react";

function Input({type = "text", placeholder, 
                value, onChange, name,
                disabled = false,}) {
    return(
        <Input type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange} disabled={disabled}/>
    );
}

export default Input;