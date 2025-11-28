import MyAppNav from "./nav";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <MyAppNav />
      <Outlet /> {/* Aquí se cargarán las páginas */}
    </>
  );
}
