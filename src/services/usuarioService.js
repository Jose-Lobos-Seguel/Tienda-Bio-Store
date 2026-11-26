import { getApi, postApi } from "./api";

export function listarUsuarios() {
    return getApi("/api/usuarios");
}

export function obtenerUsuario(id) {
    return getApi(`/api/usuarios/${id}`);
}

export function crearUsuario(datos) {
    return postApi("/api/usuarios", {
        nombre: datos.nombre,
        email: datos.email,
        numeroTelefonico: datos.numeroTelefonico,
        rolId: Number(datos.rolId),
    });
}