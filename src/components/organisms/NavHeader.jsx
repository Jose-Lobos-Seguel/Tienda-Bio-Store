import React from "react";
import Logo from "../molecules/Logo.jsx"
import NavMenu from "../molecules/NavMenu.jsx"

function NavHeader() {
    return(
        <header className="organism-header">
            <Logo/>
            <NavMenu/>
        </header>
    );
}

export default NavHeader;