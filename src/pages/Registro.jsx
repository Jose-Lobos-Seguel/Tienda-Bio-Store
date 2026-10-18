import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import { crearUsuario, buscarPorCorreo } from "../data/UsuariosBD";

function Registro() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [repetir, setRepetir] = useState("");
    const [error, setError] = useState("");

    const handleRegistro = (event) => {
    event.preventDefault();

    if (usuario == "" || correo == "" || contraseña == "") {
        setError("Completa todos los campos");
        return;
    }
    if (!correo.includes("@")) {
        setError("Correo inválido");
        return;
    }
    if (contraseña.length < 8) {
        setError("La contraseña debe tener al menos 8 caracteres");
        return;
    }
    if (contraseña !== repetir) {
        setError("Las contraseñas no coinciden");
        return;
    }
    if (buscarPorCorreo(correo)) {
        setError("Ese correo ya está registrado");
        return;
    }

    crearUsuario({
        usuario: usuario,
        correo: correo,
        contraseña: contraseña,
        tipo: "usuario",
    });

    alert("Cuenta creada. Ahora puedes iniciar sesión");
    navigate("/login");
    };

    return (
        <Container className="my-5">
            <div className="caja">
                <h2>Crear cuenta</h2>
                <form onSubmit={handleRegistro} className="login-form">
                    <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Repetir contraseña"
                    value={repetir}
                    onChange={(e) => setRepetir(e.target.value)}
                    />

                    {error && <p className="login-error">{error}</p>}

                    <Button type="submit" className="btn">Registrarme</Button>
                </form>
            </div>
        </Container>
    );
}

export default Registro;