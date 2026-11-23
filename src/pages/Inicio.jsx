import Container from "../components/atoms/Container";
import Text from "../components/atoms/Text"

function Inicio() {
    return(
    <Container className="my-5">
        <Text variant="h1">Bienvenido a Bio-Store</Text>
        <Text>Esta pagina se dedica a la venta de figuras de coleccion.</Text>
    </Container>
    );
}

export default Inicio;