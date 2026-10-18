import usuariosIniciales from "./Usuarios";

function guardar(lista) {
    localStorage.setItem("listaUsuarios", JSON.stringify(lista));
}

// Buscar todos
export function obtenerUsuarios() {
    if (localStorage.getItem("listaUsuarios") === null) {
        guardar(usuariosIniciales);
    }
    return JSON.parse(localStorage.getItem("listaUsuarios"));
}

// Buscar por id
export function obtenerUsuario(id) {
    const lista = obtenerUsuarios();
    for (const usuario of lista) {
        if (usuario.id === Number(id)) {
        return usuario;
        }
    }
    return undefined;
}

// Buscar por correo
export function buscarPorCorreo(correo) {
    const lista = obtenerUsuarios();
    for (const usuario of lista) {
        if (usuario.correo === correo) {
        return usuario;
        }
    }
    return undefined;
}

// Crear
export function crearUsuario(nuevo) {
    const lista = obtenerUsuarios();

    let nuevoId = 1;
    for (const usuario of lista) {
        if (usuario.id >= nuevoId) {
        nuevoId = usuario.id + 1;
        }
    }

    nuevo.id = nuevoId;
    lista.push(nuevo);
    guardar(lista);
}