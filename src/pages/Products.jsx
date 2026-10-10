import React from "react";
import products from "../data/Products";
import ProductCard from "../components/organisms/ProductCard";
import Container from "../components/atoms/Container";
import Row from "../components/atoms/Row";

function Products(){
    return(
        <Container className={"my-5"}>
            <h1>Productos</h1>
            <Row>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
        </Container>
    );
}

export default Products;