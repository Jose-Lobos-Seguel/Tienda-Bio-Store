import React from "react";
import { useState } from "react";
import { obtenerProductos } from "../data/ProductsBD";
import ProductCard from "../components/organisms/ProductCard";
import Container from "../components/atoms/Container";
import Row from "../components/atoms/Row";

function Products(){
    const products = obtenerProductos();
    const [busqueda, setBusqueda] = useState("");
    const productosFiltrados = products.filter((product) =>
        product.name.toLowerCase().includes(busqueda.toLowerCase())
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
            
            <Row>
                {productosFiltrados.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
            
        </Container>
    );
}

export default Products;