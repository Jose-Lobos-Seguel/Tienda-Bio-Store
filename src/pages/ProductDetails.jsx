import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/Products";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";
import Button from "../components/atoms/Button";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className={"my-5"}>
        <h1>Producto no encontrado</h1>
        <Button className="btn" onClick={() => navigate("/products")}>
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container className={"my-5"}>
      <div>
        <Image src={product.image} alt={product.name} className="detalles-img" />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4 className="detalles-precio">${product.price}</h4>
          <Button className="btn" onClick={() => navigate("/products")}>
            Volver
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;