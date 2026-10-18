import { Navigate, useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import AdminDashboard from "../components/organisms/AdminDashboard";
import ProductosAdmin from "../components/organisms/ProductsAdmin";
import OrdenesAdmin from "../components/organisms/OrdenesAdmin";
import UsuariosAdmin from "../components/organisms/UsuariosAdmin";

function Admin() {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario || usuario.tipo !== "admin") {
        return <Navigate to="/login" />;
    }
    const handleSalir = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
    };

    const dashboardTabs = [
        {id: "dashboard", label: "Panel principal",
            content:(
                <div>
                    <h2>Resumen General</h2>
                    <p>Bienvenido, {usuario.usuario}.</p>
                </div>
            )
        },
        {id: "products", label: "Productos",
            content:(
                <ProductosAdmin />
            )
        },
        {id: "ordenes", label: "Ordenes",
            content:(
                <OrdenesAdmin />
            )
        },
        {id: "usuarios", label: "Usuarios",
            content:(
                <UsuariosAdmin />
            )
        }
    ]

    return(
        <Container>
            <div className="products-header">
                <h1>Admin Dashboard</h1>
                <Button className="btn" onClick={handleSalir}>Cerrar sesión</Button>
            </div>
            <AdminDashboard tabs={dashboardTabs}/>
        </Container>
    );
}

export default Admin;