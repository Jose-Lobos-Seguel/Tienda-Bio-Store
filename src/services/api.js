const API = import.meta.env.VITE_API_URL || "http://localhost:8080";

async function pedir(ruta, opciones) {
    let respuesta;
    try {
        respuesta = await fetch(API + ruta, opciones);
    } catch (e) {
        throw new Error("No se pudo conectar con el servidor");
    }

    if (respuesta.status == 204) {
        return null;
    }

    let datos = null;
    try {
        datos = await respuesta.json();
    } catch (e) {
        datos = null;
    }

    if (!respuesta.ok) {
        const mensaje = (datos && (datos.mensaje || datos.message)) || "Error en la solicitud";
        throw new Error(mensaje);
    }
    return datos;
}

export function getApi(ruta) {
    return pedir(ruta);
}

export function postApi(ruta, datos) {
    return pedir(ruta, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    });
}

export function putApi(ruta, datos) {
    return pedir(ruta, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    });
}

export function delApi(ruta) {
    return pedir(ruta, { method: "DELETE" });
}