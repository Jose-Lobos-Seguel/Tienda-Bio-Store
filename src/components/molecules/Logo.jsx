import React from "react";
import { Link } from "react-router-dom";

const logoimagen = "https://i.ibb.co/5x5gRM6Z/Logo-Tienda.webp"

function logo() {
    return(
        <a href="pagina inicio" className="molecule-logo">
            <img src={logoimagen} alt="Logotipo" className="Logo-img"/>
        </a>
    );
}

export default logo;