function guardar(lista) {
    localStorage.setItem("ordenes", JSON.stringify(lista));
}

// buscar todas las ordenes
export function obtenerOrdenes() {
    if (localStorage.getItem("ordenes") === null) {
        return [];
    }
    return JSON.parse(localStorage.getItem("ordenes"));
}

// Buscar orden por id
export function obtenerOrden(id) {
    const lista = obtenerOrdenes();
    for (const orden of lista) {
        if (orden.id === Number(id)) {
        return orden;
        }
    }
    return undefined;
}

// Crear orden
export function crearOrden(nueva) {
    const lista = obtenerOrdenes();

    let nuevoId = 1;
    for (const orden of lista) {
        if (orden.id >= nuevoId) {
        nuevoId = orden.id + 1;
        }
    }

    nueva.id = nuevoId;
    lista.push(nueva);
    guardar(lista);
    return nueva;
}