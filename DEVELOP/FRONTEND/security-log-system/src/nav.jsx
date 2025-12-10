import './assets/styles/index.css'
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const ClipboardPlus = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v1h8V3a1 1 0 0 0-1-1z"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>
);

const ListChecks = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h11"/><path d="M3 6h11"/><path d="M3 14h11"/><path d="M16 4l2 2l4-4"/><path d="M16 10l2 2l4-4"/><path d="M16 16l2 2l4-4"/></svg>
);

const Search = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const Clock = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const X = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);


// === Componente de Enlace del Menú Lateral (Simula el componente Link) ===
// Utiliza un 'to' prop para simular la navegación de react-router-dom
const MenuItem = ({ icon: title, to, onClick }) => (

  <Link
    to={to} 
    onClick={onClick} // Esta función sigue siendo para cerrar el menú
    className="flex items-center w-full bg-white rounded-lg shadow-md overflow-hidden mb-4
               border border-gray-200 transition duration-150 hover:bg-gray-50"
  >
    {/* Área del icono */}
    <div className="flex items-center justify-center p-4 w-1/4 bg-gray-200 text-gray-700 h-full">
      <Icon className="w-8 h-8 md:w-10 md:h-10" />
    </div>
    
    {/* Área del texto */}
    <div className="w-3/4 p-4 text-left font-semibold text-gray-800 uppercase text-sm leading-tight">
      {title}
    </div>
  </Link>
);


export default function MyAppNav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Los ítems del menú reflejan las opciones del wireframe
  // y utilizan las rutas de ejemplo que proporcionaste.
  const menuItems = [
    { id: 1, icon: ClipboardPlus, title: 'Registrar Ingreso de Equipo', Link ,to: '/security/registro-ingreso' },
    { id: 2, icon: ListChecks, title: 'Lista de Registros', Link, to: '/security/lista-registros' },
    { id: 3, icon: Search, title: 'Consultar Registro de un Equipo', Link, to: '/security/consultar-registro' },
    { id: 4, icon: Clock, title: 'Historial de Entradas y Salidas', Link, to: '/security/historial' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Cierra el menú cuando se hace clic en un enlace (simula navegación)
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Barra de Navegación Superior (Fixed Header) */}
      {/* Se mantiene la estructura visual del wireframe (MENU, Título, Cerrar Sesión) */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-20 border-b border-gray-200 p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Botón MENÚ */}
          <button
            onClick={toggleMenu}
            className="px-4 py-2 border-2 border-gray-300 rounded-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-150 shadow-md uppercase text-sm md:text-base"
            aria-label="Toggle Menu"
          >
            MENÚ
          </button>

          {/* Título Central */}
          <h1 className="text-base md:text-xl font-extrabold text-gray-900 tracking-wider text-center uppercase truncate mx-4">
            SECURITY LOG SYSTEM
          </h1>

          {/* Botón Cerrar Sesión (simulado como Link to="/")) */}
          {/* Se usa el primer Link de tu esqueleto: Ingreso de sesión */}
          <a
            href="/"
            onClick={(e) => {
                e.preventDefault(); 
                console.log("Simulando Link to: /");
            }}
            className="px-3 py-2 border-2 border-red-500 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition duration-150 shadow-md text-sm md:text-base whitespace-nowrap"
            aria-label="Cerrar Sesión (Simulado)"
          >
            Cerrar Sesión
          </a>
        </div>
      </header>

      {/* 2. Menú Lateral (Sidebar) */}
      
      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Contenedor del Menú Deslizable */}
      <nav
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-gray-100 p-6 z-30 shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:max-w-sm`}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">MENÚ</h2>
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-200 transition"
            aria-label="Cerrar Menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Opciones del Menú (Usando el componente MenuItem para simular Link) */}
        <div className="space-y-4">
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              icon={item.icon}
              title={item.title}
              to={item.to} // Usamos 'to' para simular la prop de Link
              onClick={handleLinkClick}
            />
          ))}
        </div>
      </nav>
      <main className="p-40 max-w-7xl mx-auto"> 
        {/* Contenedor para el contenido principal del mensaje principal*/}
        <div className="mt-8">
            <Outlet /> 
        </div>
      </main>      
    </div>
  )
}


