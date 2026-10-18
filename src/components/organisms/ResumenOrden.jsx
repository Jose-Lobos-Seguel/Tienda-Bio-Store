function ResumenOrden({ orden }) {
    return (
    <div>
        <p>Boleta: Nº {orden.id}</p>
        <p>Cliente: {orden.nombre} ({orden.correo})</p>
        <p>Entrega: {orden.calle}, {orden.comuna}</p>

        <table className="carrito-tabla">
            <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>
            {orden.productos.map((producto, index) => (
                <tr key={index}>
                <td>{producto.name}</td>
                <td>${producto.price}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <p className="carrito-total">Total: ${orden.total}</p>
        </div>
    );
}

export default ResumenOrden;