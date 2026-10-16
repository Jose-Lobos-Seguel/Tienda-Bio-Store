import React from "react";
import Button from "../atoms/Button"

function AdminTab({ label, onClick, isActive}) {
    const buttonClassName = isActive ? "TabButton-on" : "TabButton-off";
    
    return(
        <Button onClick={onClick} className={buttonClassName}>
        <span>{label}</span>
        </Button>
    );
}

export default AdminTab;