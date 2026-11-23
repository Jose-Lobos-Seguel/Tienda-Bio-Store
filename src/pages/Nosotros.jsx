import Container from "../components/atoms/Container";
import Text from "../components/atoms/Text"

function Nosotros() {
    return(
    <Container className="my-5">
        <Text variant="h1">Bio-Store</Text>
        <Text>
            Esta tienda es un pequeño proyecto informatico creado por Martin Galaz como lider de desarrollo
            y Jose Lobos Como desarrollador, este proyecto se enfoca en la creacion de una tienda de figuras de coleccion.
        </Text>
    </Container>
    );
}

export default Nosotros;