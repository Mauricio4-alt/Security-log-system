import './assets/styles/index.css'
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const ICON_URLS = {
    // Menú Lateral (URLs de Placeholders en lugar de SVG)
    registrosCeladores: 'https://cdn-icons-png.flaticon.com/512/2921/2921788.png', 
    gestionCuentas: 'https://cdn-icons-png.flaticon.com/512/5510/5510047.png',
    historial: 'https://cdn-icons-png.flaticon.com/512/2921/2921317.png',      

    // Icono para cerrar el menú (X) - Se mantiene como SVG para la UI

};

const MenuItem = ({ iconUrl, title, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center w-full bg-white rounded-lg shadow-md overflow-hidden mb-4
               border border-gray-200 transition duration-150 hover:bg-gray-50"
  >
    {/* Área del icono (imitando el bloque gris del wireframe) */}
    <div className="flex items-center justify-center p-4 w-1/4 bg-gray-200 h-full">
      <img
        src={iconUrl}
        alt={`Icono de ${title}`}
        className="w-12 h-12 md:w-12 md:h-12 rounded-md"
      />
    </div>
    
    {/* Área del texto */}
    <div className="w-3/4 p-4 text-left font-semibold text-gray-800 uppercase text-sm leading-tight">
      {title}
    </div>
  </Link>
);

export default function MyAppNavAdmin() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Usamos las URLs definidas en ICON_URLS para el array de items
  const menuItems = [

    { iconUrl: ICON_URLS.registrosCeladores, title: 'Registros Funcionarios', Link ,to: '/admin/registros-funcionarios' },
    { iconUrl: ICON_URLS.gestionCuentas, title: 'Gestión de cuentas Funcionarios', Link ,to: '/admin/Funcionarios' },
    { iconUrl: ICON_URLS.historial, title: 'Historial de Entradas y Salidas', Link, to: '/admin/consulta-historial' },
 FREDDY
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
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-20 border-b border-gray-200 p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Botón MENÚ */}
          <button
            onClick={toggleMenu}
            className="p-2.5 border-2 border-gray-300 rounded-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-150 uppercase"
          >
            MENÚ
          </button>

          {/* Título Central */}
          <h1 className="text-base md:text-xl font-extrabold text-gray-900 tracking-wider text-center uppercase truncate mx-4">
            SECURITY LOG SYSTEM
          </h1>

          {/* Botón Cerrar Sesión (simulado) */}

          <Link
            to="/"
            className="p-2.5 border-2 border-slate-500 rounded-lg font-semibold text-white bg-slate-600 hover:bg-slate-700 transition duration-150 text-sm md:text-base whitespace-nowrap"
> FREDDY
          
            Cerrar Sesión
          </Link>
        </div>
      </header>

      {/* 2. Menú Lateral (Sidebar) */}
      
      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Contenedor del Menú Deslizable */}
      <nav
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-gray-100 p-6 z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:max-w-sm`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">MENÚ</h2>

        </div>

        {/* Opciones del Menú */}
        <div className="space-y-4">
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              // Se pasa la URL, no el componente
              iconUrl={item.iconUrl}
              title={item.title}
              to={item.to}
              onClick={handleLinkClick}
            />
          ))}
        </div>
      </nav>
      <main> 
        {/* Contenedor para el contenido principal del mensaje principal*/}
        <div className="mt-20">
            <Outlet /> 
        </div>
      </main>      
    </div>
  )
}