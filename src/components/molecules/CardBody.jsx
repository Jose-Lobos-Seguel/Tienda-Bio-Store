import React from "react";
import Text from "../atoms/Text.jsx"

function CardBody({ titulo, descripcion, precio}) {
    return(
        <div className="card-body">
            <Text variant="h5" className="card-title">{titulo}</Text>
            <Text variant="p" className="card-text">{descripcion}</Text>
            <Text variant="span" className="precio">${precio}</Text>
        </div>
    );
}

export default CardBody;