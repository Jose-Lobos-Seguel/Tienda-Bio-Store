import { useState } from "react";
import Button from "../atoms/Button";
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from "../../data/ProductsBD";
import Text from "../atoms/Text";
import { subirImagen } from "../../data/ImgBB";

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
    const [subiendo, setSubiendo] = useState(false);

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

    const handleArchivo = async (event) => {
    const input = event.target;
    const archivo = input.files[0];
    if (!archivo) return;

    setSubiendo(true);
    setError("");

    try {
        const url = await subirImagen(archivo);
        if (url) {
            setImage(url);
        } else {
            setError("No se pudo subir la imagen");
        }
    } catch (e) {
        setError("No se pudo subir la imagen");
    }

    input.value = "";
    setSubiendo(false);
    };

    return (
        <div>
        <Text variant="h2">Administración de Productos</Text>

        <form onSubmit={handleGuardar} className="login-form">
            <Text variant="h3">{editandoId === null ? "Nuevo producto" : "Editar producto"}</Text>

            <input type="text" placeholder="Nombre" value={name}
            onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Descripción" value={description}
            onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Precio" value={price}
            onChange={(e) => setPrice(e.target.value)} />
            <input type="file" accept="image/*" onChange={handleArchivo} />
            {subiendo && <Text>Subiendo imagen...</Text>}
            {image && <img src={image} alt="Vista previa" className="vista-previa" />}
            <input type="text" placeholder="Categoría" value={category}
            onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Stock" value={stock}
            onChange={(e) => setStock(e.target.value)} />

            {error && <Text className="login-error">{error}</Text>}

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
                <Text variant="th">Producto</Text>
                <Text variant="th">Categoría</Text>
                <Text variant="th">Precio</Text>
                <Text variant="th">Stock</Text>
                <Text variant="th">Acciones</Text>
            </tr>
            </thead>
            <tbody>
            {productos.map((producto) => (
                <tr key={producto.id}>
                <Text variant="td">{producto.name}</Text>
                <Text variant="td">{producto.category}</Text>
                <Text variant="td">${producto.price}</Text>
                <Text variant="td">{producto.stock}</Text>
                <Text variant="td">
                    <Button type="submit" className="btn" disabled={subiendo}>
                        {editandoId == null ? "Crear" : "Guardar cambios"}
                    </Button>
                    <Button className="btn" onClick={() => handleEliminar(producto.id)}>
                    Eliminar
                    </Button>
                </Text>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default ProductsAdmin;