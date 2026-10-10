import React from "react";
import Image from "../atoms/Image.jsx"
import logoimagen from "../../assets/LogoTienda.webp"

function Logo({}) {
    return(
        <a href="pagina inicio" className="molecule-logo">
            <Image src={logoimagen} alt="Logotipo"/>
        </a>
    );
}

export default Logo;