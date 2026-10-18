import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import { obtenerProducto } from "../data/ProductsBD";
import { obtenerCarrito, vaciarCarrito } from "../data/Carrito";
import { descontarStock } from "../data/Stock";
import { crearOrden } from "../data/OrdenesBD";

function Pago() {
    const navigate = useNavigate();
    const sesion = JSON.parse(localStorage.getItem("usuario"));

    const [nombre, setNombre] = useState(sesion ? sesion.usuario : "");
    const [correo, setCorreo] = useState(sesion ? sesion.correo : "");
    const [calle, setCalle] = useState("");
    const [comuna, setComuna] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [error, setError] = useState("");
    const carrito = obtenerCarrito();

    const productos = [];
    let total = 0;
    for (const id of carrito) {
    const producto = obtenerProducto(id);
    if (producto) {
        productos.push({ name: producto.name, price: producto.price });
        total = total + producto.price;
        }
    }

    const handlePagar = (event) => {
    event.preventDefault();

    if (nombre == "" || correo == "" || calle == "" || comuna == "") {
        setError("Los campos no pueden quedar en blanco ");
        return;
    }
    if (tarjeta.length !== 16) {
        setError("La tarjeta debe tener 16 números");
        return;
    }

    let estado = "pagada";
    if (tarjeta == "0000000000000000") {
    estado = "Pago invalido";
    }

    const orden = crearOrden({
        estado: estado,
        total: total,
        nombre: nombre,
        correo: correo,
        calle: calle,
        comuna: comuna,
        productos: productos,
    });

    if (estado == "pagada") {
        descontarStock(carrito);
        vaciarCarrito();
        navigate("/pago-correcto/" + orden.id);
    } else {
        navigate("/pago-error/" + orden.id);
    }
    };

    if (productos.length == 0) {
    return (
        <Container className="my-5">
        <h2>Tu carro se encuetra vacio</h2>
        </Container>
        );
    }

    return (
    <Container className="my-5">
        <div className="caja caja-pago">
            <h2>Pago</h2>

            <table className="carrito-tabla">
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                    <tr key={index}>
                        <td>{producto.name}</td>
                        <td>${producto.price}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <p className="carrito-total">Total: ${total}</p>

            <form onSubmit={handlePagar} className="form-pago">
                <input type="text" placeholder="Nombre" value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Correo" value={correo}
                    onChange={(e) => setCorreo(e.target.value)} />
                <input type="text" placeholder="Calle" value={calle}
                    onChange={(e) => setCalle(e.target.value)} />
                <input type="text" placeholder="Comuna" value={comuna}
                    onChange={(e) => setComuna(e.target.value)} />
                <input type="text" placeholder="Tarjeta (16 números)" value={tarjeta}
                    onChange={(e) => setTarjeta(e.target.value)} />

                {error && <p className="login-error">{error}</p>}

                <button type="submit" className="btn">Pagar ${total}</button>
            </form>
        </div>
    </Container>
    );
}

export default Pago;