import { Outlet, Link } from "react-router-dom";

export default function MyAppNav() {
  return (
    <div>
      <nav>
        <Link to="/">Ingreso de sesión</Link>
        <Link to="/security/">Otro</Link>
        <Link to="/security/registro-ingreso">Registro ingreso</Link>
      </nav>
      
     

      <Outlet />
    </div>
  );
}
