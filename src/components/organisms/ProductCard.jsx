import React from "react"
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import CardBody from "../molecules/CardBody";
import { useNavigate } from "react-router-dom";
import { stockDe } from "../../data/Stock";
import { agregarAlCarrito } from "../../data/Carrito";


function ProductCard({ product }) {
    const navigate = useNavigate();
    const stock = stockDe(product.id);

    const handleAgregar = () => {
        const ok = agregarAlCarrito(product.id);
        alert(ok ? "Producto agregado al carrito" : "No hay más stock disponible");
    };

    return(
        <div className="organism-product-card">
            <Image src={product.image} alt={product.name} className="product-card-img"></Image>
            <div className="product-card-content">
                <CardBody titulo={product.name} descripcion={product.description} precio={product.price}/>
                <Button className="button-detail"onClick={() => navigate(`/products/${product.id}`)}>Ver detalles</Button>
                <Button className="button-add" disabled={stockDe == 0} onClick={handleAgregar}>Agregar al carrito</Button>

            </div>
        </div>
    );
}

export default ProductCard;