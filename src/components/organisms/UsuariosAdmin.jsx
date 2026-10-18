import { useState } from "react";
import { obtenerUsuarios,crearUsuario,buscarPorCorreo } from "../../data/UsuariosBD";

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
        <h2>Usuarios</h2>
        <form onSubmit={handleCrear} className="login-form">
            <h3>Nuevo usuario</h3>

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
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className="btn">Crear usuario</button>
        </form>

        <table className="carrito-tabla">
            <thead>
            <tr>
                <th>Id</th>
                <th>Nombre de Usuario</th>
                <th>Correo</th>
                <th>Tipo de usuario</th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map((u) => (
                <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.usuario}</td>
                <td>{u.correo}</td>
                <td>{u.tipo}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

export default UsuariosAdmin;