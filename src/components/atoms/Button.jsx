import React from "react";

function Button({ onClick, children, className = "button-detail", disabled }) {
    
    return(
        <button onClick={onClick} className={className} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;