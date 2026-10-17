import Container from "../components/atoms/Container";
import AdminDashboard from "../components/organisms/AdminDashboard";
import ProductAdmin from "../components/organisms/ProductsAdmin";

function Admin() {
    const dashboardTabs = [
        {id: "dashboard", label: "panel principal",
            content:(
                <div>
                    <h2 className="text-xl font-bold">Resumen General</h2>
                    <p>Bienvenido al panel de control de tu tienda.</p>
                </div>
            )
        },
        {id: "products", label: "productos",
            content:(
                <div>
                    <h2 className="text-xl font-bold">Administracion de productos</h2>
                    <p>productos</p>
                </div>
            )
        }
    ]
    return(
        <Container>
            <AdminDashboard tabs={dashboardTabs}/>
        </Container>
    );
}

export default Admin;