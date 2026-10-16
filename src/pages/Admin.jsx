import Container from "../components/atoms/Container";
import AdminDashboard from "../components/organisms/AdminDashboard";

function Admin() {
    const dashboardTabs = [
        {id: "dashboard", label: "panel principal",
            content:(
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-bold">Resumen General</h2>
                    <p>Bienvenido al panel de control de tu tienda.</p>
                </div>
            )
        },
        {id: "products", label: "productos",
            content:(
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-bold mb-4">Administración de Productos</h2>
                    <p>Listado de productos cargados desde src/data/Products.js...</p>
            </div>
            )
        }
    ]
    return(
        <Container>
            <h1>Dashboard</h1>
            <AdminDashboard tabs={dashboardTabs}/>
        </Container>
    );
}

export default Admin;