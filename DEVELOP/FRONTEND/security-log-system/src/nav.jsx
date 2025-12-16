import './assets/styles/index.css'
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const ICON_URLS = {
    // Menú Lateral (URLs de Placeholders en lugar de SVG)
    registro: 'https://cdn-icons-png.flaticon.com/512/2921/2921226.png',     // Registrar Ingreso
    lista: 'https://cdn-icons-png.flaticon.com/512/2921/2921322.png',       // Lista de Registros
    consulta: 'https://cdn-icons-png.flaticon.com/512/2921/2921279.png',   // Consultar Registro
    historial: 'https://cdn-icons-png.flaticon.com/512/2921/2921317.png',    // Historial
    // Icono para cerrar el menú (X) - Se mantiene como SVG para la UI
    close: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    ),
};




// === Componente de Enlace del Menú Lateral (Ahora usa URL de imagen) ===
// Define la estructura de cada opción del menú
// Se modificó para recibir 'iconUrl' en lugar de 'icon: Icon'
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
        // Manejo de error de carga de imagen
        onError={(e) => { e.target.onerror = null; e.target.src=ICON_URLS.errorFallback; e.target.alt="Error de Carga"; }} 
      />
    </div>
    
    {/* Área del texto */}
    <div className="w-3/4 p-4 text-left font-semibold text-gray-800 uppercase text-sm leading-tight">
      {title}
    </div>
  </Link>
);

export default function MyAppNav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Usamos las URLs definidas en ICON_URLS para el array de items
  const menuItems = [
    { id: 1, iconUrl: ICON_URLS.registro, title: 'Registrar Ingreso de Equipo', Link ,to: '/security/registro-ingreso' },
    { id: 2, iconUrl: ICON_URLS.lista, title: 'Lista de Registros', Link, to: '/security/lista-registros' },
    { id: 3, iconUrl: ICON_URLS.consulta, title: 'Consultar Registro de un Equipo', Link, to: '/consultar-registro' },
    { id: 4, iconUrl: ICON_URLS.historial, title: 'Historial de Entradas y Salidas', Link, to: '/historial' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Cierra el menú cuando se hace clic en un enlace (simula navegación)
    setIsMenuOpen(false);
  };

  // 3. Obtenemos el componente SVG de cerrar para usarlo directamente
  const CloseIcon = ICON_URLS.close;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Barra de Navegación Superior (Fixed Header) */}
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

          {/* Botón Cerrar Sesión (simulado) */}
          <a
            href="/"
            className="px-3 py-2 border-2 border-red-500 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition duration-150 shadow-md text-sm md:text-base whitespace-nowrap"
            aria-label="Cerrar Sesión"
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
            <CloseIcon className="w-6 h-6" />
          </button>
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
      <main > 
        {/* Contenedor para el contenido principal del mensaje principal*/}
        <div className="mt-20">
            <Outlet /> 
        </div>
      </main>      
    </div>
  )
}


