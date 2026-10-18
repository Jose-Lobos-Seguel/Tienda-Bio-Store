import React from "react";
import { useState } from "react";
import { obtenerProductos } from "../data/ProductsBD";
import ProductCard from "../components/organisms/ProductCard";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import Row from "../components/atoms/Row";

function Products(){
    const products = obtenerProductos();
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("todas");

    const categorias = ["todas"];
    for (const product of products){
        if (product.category && !categorias.includes(product.category)) {
            categorias.push(product.category)
        }
    }

    const productosFiltrados = products.filter((product) =>
        product.name.toLowerCase().includes(busqueda.toLowerCase()) &&
        (categoria == "todas" || product.category == categoria)
    );

    return(
        <Container className={"my-5"}>
            <div className="product-titulo">
                <h2>Productos</h2>
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="buscador"
                />
            </div>

            <div className="categoria-botones">
                {categorias.map((c) => (
                    <Button
                        key={c}
                        className={c === categoria ? "TabButton-on" : "TabButton-off"}
                        onClick={() => setCategoria(c)}
                    >
                        {c}
                    </Button>
                ))}
            </div>
            
            <Row>
                {productosFiltrados.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
            
        </Container>
    );
}

export default Products;