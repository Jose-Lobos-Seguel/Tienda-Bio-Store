import React from "react";
import Image from "../atoms/Image.jsx"
import logoimagen from "../../assets/LogoTienda.webp"

function logo({}) {
    return(
        <a href="pagina inicio" className="molecule-logo">
            <img src={logoimagen} alt="Logotipo" className="Logo-img"/>
        </a>
    );
}

export default logo;