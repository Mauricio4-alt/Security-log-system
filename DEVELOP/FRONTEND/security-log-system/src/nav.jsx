import { NavLink } from "react-router";

export default function MyAppNav() {
  
   

    return (
    <nav className=".barra-n">
    
      
      <NavLink to="/" end>Login</NavLink>
      <NavLink to="/registros">Account</NavLink>
      <NavLink to="/admin">All Concerts</NavLink>
    </nav>
  );
}
