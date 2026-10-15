import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import products from "../data/Products";
import { obtenerCarrito, vaciarCarrito } from "../data/Carrito";
import { descontarStock } from "../data/Stock";

function Pago() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");

  const carrito = obtenerCarrito();

  let total = 0;
  for (const id of carrito) {
    const producto = products.find((p) => p.id === id);
    if (producto) {
      total = total + producto.price;
    }
  }

  const handlePagar = (event) => {
    event.preventDefault();

    if (carrito.length === 0) {
      setError("Tu carrito está vacío");
      return;
    }
    if (nombre === "") {
      setError("Escribe el nombre de la tarjeta");
      return;
    }
    if (tarjeta.length !== 16) {
      setError("La tarjeta debe tener 16 dígitos");
      return;
    }
    if (codigo.length !== 3) {
      setError("El código debe tener 3 dígitos");
      return;
    }

    descontarStock(carrito);
    vaciarCarrito();
    alert("¡Pago exitoso!");
    navigate("/carrito");
  };

  return (
    <Container className="my-5">
      <h2>Pago</h2>
      <p className="pago-total">Total a pagar: ${total}</p>

      <form onSubmit={handlePagar} className="pago-form">
        <input
          type="text"
          placeholder="Nombre de la tarjeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de tarjeta (16 dígitos)"
          value={tarjeta}
          onChange={(e) => setTarjeta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Código de seguridad (3 dígitos)"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="btn">
          Pagar
        </button>
      </form>
    </Container>
  );
}

export default Pago;