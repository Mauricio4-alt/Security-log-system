import { NavLink } from "react-router";
import './assets/styles/nav.css'
import { GoChecklist, GoListOrdered, GoSearch, GoHistory } from 'react-icons/go';
export default function MyAppNav() {
  
   

    return (
    <nav className=".barra-n">
      <NavLink to="/" end>Login</NavLink>
      <NavLink to="/registros">Account</NavLink>
      <NavLink to="/admin">All Concerts</NavLink>
    </nav>
  );
}
