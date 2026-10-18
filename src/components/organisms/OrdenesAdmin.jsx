import { useState } from "react";
import Button from "../atoms/Button";
import ResumenOrden from "./ResumenOrden";
import { obtenerOrdenes } from "../../data/OrdenesBD";

function OrdenesAdmin() {
    const ordenes = obtenerOrdenes();
    const [seleccionada, setSeleccionada] = useState(null);

    return (
        <div>
        <h2>Órdenes</h2>

        {ordenes.length == 0 ? (
            <p>No hay ordenes creadas</p>
        ) : (
            <table className="carrito-tabla">
            <thead>
                <tr>
                <th>Numero de Boleta</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Boleta</th>
                </tr>
            </thead>
            <tbody>
                {ordenes.map((orden) => (
                <tr key={orden.id}>
                    <td>{orden.id}</td>
                    <td>{orden.nombre}</td>
                    <td>${orden.total}</td>
                    <td>{orden.estado}</td>
                    <td>
                    <Button className="btn" onClick={() => setSeleccionada(orden)}>
                        Ver boleta
                    </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}

        {seleccionada && (
            <div className="caja caja-pago">
            <h3>Boleta ({seleccionada.estado})</h3>
            <ResumenOrden orden={seleccionada} />
            <Button className="btn" onClick={() => setSeleccionada(null)}>Cerrar boleta</Button>
            </div>
        )}
        </div>
    );
}

export default OrdenesAdmin;