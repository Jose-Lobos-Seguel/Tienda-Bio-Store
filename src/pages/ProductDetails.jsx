import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/Products";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";
import Button from "../components/atoms/Button";
import { stockDe } from "../data/Stock";
import { agregarAlCarrito } from "../data/Carrito";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const stock = stockDe(product.id);

  const handleAgregar = () => {
    const ok = agregarAlCarrito(product.id);
    alert(ok ? "Producto agregado al carrito" : "No hay más stock disponible");
  };

  if (!product) {
    return (
      <Container className={"my-5"}>
        <h1>Producto no encontrado</h1>
        <Button onClick={() => navigate("/products")}>
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
          <Button className="button-detail" onClick={() => navigate("/products")}>Volver</Button>
          <p className={stock > 0 ? "stock" : "agotado"}>{stock > 0 ? `En Stock: ${stock}` : "Agotado"}</p>
          <Button className="button-add" disabled={stockDe == 0} onClick={handleAgregar}>Agregar al carrito</Button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;