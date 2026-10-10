import React from "react";
import NavLink from "../atoms/NavLink.jsx"

function NavMenu() {
    return(
        <nav className="molecule-nav-menu">
            <NavLink href="/inicio">Inicio</NavLink>
            <NavLink href="/products">Productos</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>
            <NavLink href="/contacto">Contacto</NavLink>
        </nav>
    );
}

export default NavMenu;