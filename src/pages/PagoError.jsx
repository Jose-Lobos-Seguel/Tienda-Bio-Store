import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import ResumenOrden from "../components/organisms/ResumenOrden";
import { obtenerOrden } from "../data/OrdenesBD";

function PagoError() {
    const { id } = useParams();
    const navigate = useNavigate();
    const orden = obtenerOrden(id);

    if (!orden) {
        return (
        <Container className="my-5">
            <h2>Orden no encontrada</h2>
        </Container>
        );
    }

    return (
    <Container className="my-5">
        <div className="caja caja-pago">
            <h2>El pago no se pudo realizar con exito: {orden.id}</h2>
            <Button className="btn" onClick={() => navigate("/pago")}>Volver a realizar el pago</Button>
            <ResumenOrden orden={orden} />
        </div>
    </Container>
    );
}

export default PagoError;