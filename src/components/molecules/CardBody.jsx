import React from "react";
import Text from "../atoms/Text.jsx"

function CardBody({ titulo, descripcion, precio}) {
    return(
        <>
        <Text variant="h5">{titulo}</Text>
        <Text variant="p">{descripcion}</Text>
        <Text variant="span" classname="precio">${precio}</Text>
        </>
    );
}

export default CardBody;