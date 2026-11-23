import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import usuarios from "../data/Usuarios";
import { obtenerUsuarios } from "../data/UsuariosBD";
import Text from "../components/atoms/Text"

function Login() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const usuarios = obtenerUsuarios();

        const usuario = usuarios.find(
        (u) => u.correo == correo && u.contraseña == contraseña
        );

        if (!usuario) {
        setError("Correo o contraseña incorrectos");
        return;
        }

        localStorage.setItem("usuario", JSON.stringify(usuario));

        if (usuario.tipo == "admin") {
        navigate("/admin");
        } else {
        navigate("/");
        }
    };

    return (
        <Container className="my-5">
        <div className="caja">
            <Text variant="h2">Iniciar sesión</Text>
            <form onSubmit={handleLogin} className="login-form">
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

            {error && <p className="login-error">{error}</p>}

            <Button type="submit" className="btn">Entrar</Button>
            <Text>No tienes cuenta? <Link to="/registro">Crear cuenta</Link></Text>
            </form>
        </div>
        </Container>
    );
}

export default Login;