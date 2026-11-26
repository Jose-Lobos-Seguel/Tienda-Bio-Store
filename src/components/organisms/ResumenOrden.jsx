import Text from "../atoms/Text";

function ResumenOrden({ orden }) {
    return (
    <div>
        <Text>Boleta: Nº {orden.id}</Text>
        <Text>Cliente: {orden.nombre} ({orden.correo})</Text>
        <Text>Entrega: {orden.calle}, {orden.comuna}</Text>

        <table className="carrito-tabla">
            <thead>
            <tr>
                <Text variant="th">Producto</Text>
                <Text variant="th">Precio</Text>
            </tr>
            </thead>
            <tbody>
            {orden?.productos?.map((producto, index) => (
                <tr key={index}>
                    <Text variant="td">{producto.name}</Text>
                    <Text variant="td">${producto.price}</Text>
                </tr>
            ))}
            </tbody>
        </table>

        <Text className="carrito-total">Total: ${orden.total}</Text>
        </div>
    );
}

export default ResumenOrden;