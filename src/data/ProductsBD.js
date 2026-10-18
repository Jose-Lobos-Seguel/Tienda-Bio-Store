import productosIniciales from "./Products";

function guardar(lista) {
    localStorage.setItem("productos", JSON.stringify(lista));
}

// Buscar todos
export function obtenerProductos() {
    if (localStorage.getItem("productos") === null) {
        guardar(productosIniciales);
    }
    return JSON.parse(localStorage.getItem("productos"));
}

// Buscar por id
export function obtenerProducto(id) {
    const lista = obtenerProductos();
    for (const producto of lista) {
        if (producto.id === Number(id)) {
        return producto;
        }
    }
    return undefined;
}

// Crear
export function crearProducto(nuevo) {
    const lista = obtenerProductos();

    let nuevoId = 1;
    for (const producto of lista) {
        if (producto.id >= nuevoId) {
        nuevoId = producto.id + 1;
        }
    }

    nuevo.id = nuevoId;
    lista.push(nuevo);
    guardar(lista);
}

// Actualizar
export function actualizarProducto(productoEditado) {
    const lista = obtenerProductos();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === productoEditado.id) {
        lista[i] = productoEditado;
        }
    }
    guardar(lista);
}

// Eliminar
export function eliminarProducto(id) {
    const lista = obtenerProductos();
    const nuevaLista = [];
    for (const producto of lista) {
        if (producto.id !== id) {
        nuevaLista.push(producto);
        }
    }
    guardar(nuevaLista);
}