import { useState } from "react";
import Button from "../atoms/Button";
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from "../../data/ProductsBD";

function ProductsAdmin() {
    const [productos, setProductos] = useState(obtenerProductos());
    const [editandoId, setEditandoId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [error, setError] = useState("");

    const limpiarFormulario = () => {
        setEditandoId(null);
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        setCategory("");
        setStock("");
        setError("");
    };

    const handleGuardar = (event) => {
        event.preventDefault();

        if (name == "" || price == "" || stock == "") {
        setError("Nombre, precio y stock no pueden quedar en blanco.");
        return;
        }
        if (isNaN(price) || isNaN(stock)) {
        setError("el precio y el stock debe ser un numero.");
        return;
        }

        const producto = {
        name: name,
        description: description,
        price: Number(price),
        image: image,
        category: category,
        stock: Number(stock),
        };

        if (editandoId == null) {
        crearProducto(producto);
        } else {
        producto.id = editandoId;
        actualizarProducto(producto);
        }

        setProductos(obtenerProductos());
        limpiarFormulario();
    };

    const handleEditar = (producto) => {
        setEditandoId(producto.id);
        setName(producto.name);
        setDescription(producto.description);
        setPrice(producto.price);
        setImage(producto.image);
        setCategory(producto.category);
        setStock(producto.stock);
        setError("");
    };

    const handleEliminar = (id) => {
        if (window.confirm("¿Eliminar este producto?")) {
        eliminarProducto(id);
        setProductos(obtenerProductos());
        }
    };

    return (
        <div>
        <h2>Administración de Productos</h2>

        <form onSubmit={handleGuardar} className="login-form">
            <h3>{editandoId === null ? "Nuevo producto" : "Editar producto"}</h3>

            <input type="text" placeholder="Nombre" value={name}
            onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Descripción" value={description}
            onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Precio" value={price}
            onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="URL de la imagen" value={image}
            onChange={(e) => setImage(e.target.value)} />
            <input type="text" placeholder="Categoría" value={category}
            onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Stock" value={stock}
            onChange={(e) => setStock(e.target.value)} />

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="btn">
            {editandoId == null ? "Crear" : "Guardar cambios"}
            </button>
            {editandoId !== null && (
            <button type="button" className="btn" onClick={limpiarFormulario}>Cancelar</button>
            )}
        </form>

        <table className="carrito-tabla">
            <thead>
            <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {productos.map((producto) => (
                <tr key={producto.id}>
                <td>{producto.name}</td>
                <td>{producto.category}</td>
                <td>${producto.price}</td>
                <td>{producto.stock}</td>
                <td>
                    <Button className="btn" onClick={() => handleEditar(producto)}>
                    Editar
                    </Button>
                    <Button className="btn" onClick={() => handleEliminar(producto.id)}>
                    Eliminar
                    </Button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default ProductsAdmin;