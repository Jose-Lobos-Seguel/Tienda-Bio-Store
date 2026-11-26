import { getApi, postApi } from "./api";

export function listarDireccionesPorUsuario(usuarioId) {
    return getApi(`/api/direcciones/usuario/${usuarioId}`);
}

export function crearDireccion(datos) {
    return postApi("/api/direcciones", {
        calle: datos.calle,
        numero: datos.numero,
        complemento: datos.complemento || "",
        referencia: datos.referencia || "",
        comunaId: Number(datos.comunaId),
        usuarioId: Number(datos.usuarioId),
    });
}