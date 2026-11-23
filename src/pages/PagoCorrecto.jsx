import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import ResumenOrden from "../components/organisms/ResumenOrden";
import { obtenerOrden } from "../data/OrdenesBD";
import Text from "../components/atoms/Text";

function PagoCorrecto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const orden = obtenerOrden(id);

    if (!orden) {
        return (
        <Container className="my-5">
            <Text variant="h2">Orden no encontrada</Text>
        </Container>
        );
    }

    return (
    <Container className="my-5">
        <div className="caja caja-pago">
            <Text variant="h2">Se ha realizado la compra con Exito, Su numero de boleta: {orden.id}</Text>
            <ResumenOrden orden={orden} />
            <Button className="btn" onClick={() => navigate("/products")}>Seguir comprando</Button>
        </div>
    </Container>
    );
}

export default PagoCorrecto;