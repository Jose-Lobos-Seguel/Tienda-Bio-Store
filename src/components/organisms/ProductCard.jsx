import React from "react"
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import CardBody from "../molecules/CardBody";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();
    return(
        <div className="organism-product-card">
            <Image src={product.image} alt={product.name} className="product-card-img"></Image>
            <div className="product-card-content">
                <CardBody titulo={product.name} descripcion={product.description} precio={product.price}/>
                <Button onClick={() => navigate(`/products/${product.id}`)}>Ver detalles</Button>
            </div>
        </div>
    );
}

export default ProductCard;