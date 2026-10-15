import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import products from "../data/Products";
import { obtenerCarrito, eliminarDelCarrito } from "../data/Carrito";

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
      <h2>Carrito</h2>

      <table className="carrito-tabla">
        <thead>
          <tr>
            <th>Productos</th>
            <th>Precios</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productosEnCarrito.length == 0 ? (
            <tr>
              <td colSpan="3">No hay productos en el carrito</td>
            </tr>
          ) : (
            productosEnCarrito.map((producto, index) => (
              <tr key={index}>
                <td>{producto.name}</td>
                <td>${producto.price}</td>
                <td>
                  <Button className="btn"onClick={() => handleEliminar(producto.id)}>Eliminar</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h2 className="carrito-total">Total: ${total}</h2>

      {productosEnCarrito.length > 0 && (
        <Button className="btn" onClick={() => navigate("/pago")}>Pagar</Button>
      )}
    </Container>
  );
}

export default Carrito;