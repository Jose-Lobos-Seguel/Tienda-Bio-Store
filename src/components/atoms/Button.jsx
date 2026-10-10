import React from "react";

function Button({ onClick, children, classname }) {
    
    return(
        <Button onClick={onClick} classname={classname}>
            {children}
        </Button>
    );
}

export default Button;