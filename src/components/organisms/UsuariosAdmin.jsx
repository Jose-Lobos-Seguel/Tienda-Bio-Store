import { useState } from "react";
import { obtenerUsuarios,crearUsuario,buscarPorCorreo } from "../../data/UsuariosBD";
import Text from "../atoms/Text";

function UsuariosAdmin() {
    const [usuarios, setUsuarios] = useState(obtenerUsuarios());
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [tipo, setTipo] = useState("usuario");
    const [error, setError] = useState("");

    const handleCrear = (event) => {
        event.preventDefault();

    if (usuario == "" || correo == "" || contraseña == "") {
        setError("Completa todos los campos");
        return;
    }
    if (!correo.includes("@")) {
        setError("Correo inválido");
        return;
    }
    if (buscarPorCorreo(correo)) {
        setError("El correo ya se encuentra Registrado");
        return;
    }

    crearUsuario({
        usuario: usuario,
        correo: correo,
        contraseña: contraseña,
        tipo: tipo,
    });

    setUsuarios(obtenerUsuarios());
    setUsuario("");
    setCorreo("");
    setContraseña("");
    setTipo("usuario");
    setError("");
    };

    return (
    <div>
        <Text variant="h2">Usuarios</Text>
        <form onSubmit={handleCrear} className="login-form">
            <Text variant="h3">Nuevo usuario</Text>

            <input type="text" placeholder="Nombre de usuario" value={usuario}
            onChange={(e) => setUsuario(e.target.value)} />
            <input type="text" placeholder="Correo" value={correo}
            onChange={(e) => setCorreo(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={contraseña}
            onChange={(e) => setContraseña(e.target.value)} />

            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="usuario">Usuario</option>
            <option value="admin">Admin</option>
            </select>
            {error && <Text className="login-error">{error}</Text>}
            <button type="submit" className="btn">Crear usuario</button>
        </form>

        <table className="carrito-tabla">
            <thead>
            <tr>
                <Text variant="th">Id</Text>
                <Text variant="th">Nombre de Usuario</Text>
                <Text variant="th">Correo</Text>
                <Text variant="th">Tipo de usuario</Text>
            </tr>
            </thead>
            <tbody>
            {usuarios.map((u) => (
                <tr key={u.id}>
                <Text variant="td">{u.id}</Text>
                <Text variant="td">{u.usuario}</Text>
                <Text variant="td">{u.correo}</Text>
                <Text variant="td">{u.tipo}</Text>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

export default UsuariosAdmin;