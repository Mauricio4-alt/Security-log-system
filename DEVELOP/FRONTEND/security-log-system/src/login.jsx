import './assets/styles/index.css'
import { useState } from 'react'
import { InputForm } from './Tools/componentsTools';
import { Link } from 'react-router';

export default function Login() {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  
  // Lógica simplificada de inicio de sesión (solo limpia campos, no muestra mensajes)
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica real de autenticación.
    console.log('Intento de inicio de sesión con:', usuario, 'y contraseña oculta');

    // Limpiar campos después de un intento simulado
    setUsuario('');
    setContrasena('');
  };
  
  return (
    // Contenedor principal: centrado en la pantalla con un fondo suave
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Tarjeta de inicio de sesión (sin animación de cursor) */}
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md">
        
        {/* Título: ¡Bienvenido! */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-blue-700 bg-blue-100 inline-block px-6 py-2 rounded-lg shadow-inner border-2 border-blue-500 tracking-wider uppercase">
            ¡Bienvenido!
          </h1>
        </div>
        
        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Campo de USUARIO */}
          <div>
            <label htmlFor="usuario" className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
              USUARIO
            </label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 shadow-sm"
              placeholder="Ingresa tu nombre de usuario"
              aria-label="Campo de usuario"
              required // Hace que el campo sea obligatorio
            />
          </div>
          
          {/* Campo de CONTRASEÑA */}
          <div>
            <label htmlFor="contrasena" className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
              CONTRASEÑA
            </label>
            <input
              id="contrasena"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 shadow-sm"
              placeholder="Ingresa tu contraseña"
              aria-label="Campo de contraseña"
              required // Hace que el campo sea obligatorio
            />
          </div>
          
          {/* Botón Iniciar Sesión */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150"
            aria-label="Botón para iniciar sesión"
          >
            Iniciar sesión
          </button>
        </form>
        
        {/* Enlace Olvidó contraseña? */}
        <div className="mt-8 text-center">
          <a
            href="/save-password" // Define la ruta a la vista de recuperación de contraseña
            className="text-sm text-gray-500 hover:text-blue-600 hover:underline transition duration-150 focus:outline-none"
            aria-label="Enlace a la página de recuperación de contraseña"
          >
            ¿Olvidó contraseña?
          </a>
        </div>

      </div>
    </div>
  );
}