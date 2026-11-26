import { getApi } from "./api";

export function listarRoles() {
    return getApi("/api/roles");
}