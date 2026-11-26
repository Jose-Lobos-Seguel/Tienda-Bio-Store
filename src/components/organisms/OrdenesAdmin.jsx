import { useState } from "react";
import Button from "../atoms/Button";
import ResumenOrden from "./ResumenOrden";
import { obtenerOrdenes } from "../../data/OrdenesBD";
import Text from "../atoms/Text";

function OrdenesAdmin() {
    const ordenes = obtenerOrdenes();
    const [seleccionada, setSeleccionada] = useState(null);

    return (
        <div>
        <Text variant="h2">Órdenes</Text>

        {ordenes.length == 0 ? (
            <Text>No hay ordenes creadas</Text>
        ) : (
            <table className="carrito-tabla">
            <thead>
                <tr>
                <Text variant="th">Numero de Boleta</Text>
                <Text variant="th">Cliente</Text>
                <Text variant="th">Total</Text>
                <Text variant="th">Estado</Text>
                <Text variant="th">Boleta</Text>
                </tr>
            </thead>
            <tbody>
                {ordenes.map((orden) => (
                <tr key={orden.id}>
                    <Text variant="td">{orden.id}</Text>
                    <Text variant="td">{orden.nombre}</Text>
                    <Text variant="td">${orden.total}</Text>
                    <Text variant="td">{orden.estado}</Text>
                    <Text variant="td">
                    <Button className="btn" onClick={() => setSeleccionada(orden)}>
                        Ver boleta
                    </Button>
                    </Text>
                </tr>
                ))}
            </tbody>
            </table>
        )}

        {seleccionada && (
            <div className="caja caja-pago">
            <Text variant="h3">Boleta ({seleccionada.estado})</Text>
            <ResumenOrden orden={seleccionada} />
            <Button className="btn" onClick={() => setSeleccionada(null)}>Cerrar boleta</Button>
            </div>
        )}
        </div>
    );
}

export default OrdenesAdmin;