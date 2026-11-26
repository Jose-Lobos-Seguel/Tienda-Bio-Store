import { getApi } from "./api";

export function listarRegiones() {
    return getApi("/api/regiones");
}

// Cada comuna trae su regionId
export function listarComunas() {
    return getApi("/api/comunas");
}