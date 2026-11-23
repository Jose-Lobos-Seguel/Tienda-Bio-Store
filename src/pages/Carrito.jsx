import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import products from "../data/Products";
import { obtenerCarrito, eliminarDelCarrito } from "../data/Carrito";
import Text from "../components/atoms/Text"

function Carrito() {
    const navigate = useNavigate();
    const [carrito, setCarrito] = useState(obtenerCarrito());

    const productosEnCarrito = carrito
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean);

    const total = productosEnCarrito.reduce((suma, p) => suma + p.price, 0);

    const handleEliminar = (id) => {
        eliminarDelCarrito(id);
        setCarrito(obtenerCarrito());
    };

    return (
        <Container className="my-5">
        <Text variant="h2">Carrito</Text>

        <table className="carrito-tabla">
            <thead>
            <tr>
                <Text variant="th">Productos</Text>
                <Text variant="th">Precios</Text>
                <Text variant="th">Eliminar</Text>
            </tr>
            </thead>
            <tbody>
            {productosEnCarrito.length == 0 ? (
                <tr>
                <Text variant="th" colSpan="3">No hay productos en el carrito</Text>
                </tr>
            ) : (
                productosEnCarrito.map((producto, index) => (
                <tr key={index}>
                    <Text variant="td">{producto.name}</Text>
                    <Text variant="td">${producto.price}</Text>
                    <Text variant="td">
                    <Button className="btn"onClick={() => handleEliminar(producto.id)}>Eliminar</Button>
                    </Text>
                </tr>
                ))
            )}
            </tbody>
        </table>

        <Text variant="h2" className="carrito-total">Total: ${total}</Text>

        {productosEnCarrito.length > 0 && (
            <Button className="btn" onClick={() => navigate("/pago")}>Pagar</Button>
        )}
        </Container>
    );
}

export default Carrito;