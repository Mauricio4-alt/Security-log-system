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
          <h1 className="text-3xl font-extrabold text-white bg-blue-900 inline-block px-9 py-3 rounded-lg border-2 uppercase">
            Bienvenido
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
            className="w-full py-3 text-white bg-blue-700 font-bold rounded-lg hover:bg-blue-800 transition duration-150"
            aria-label="Botón para iniciar sesión"
          ><Link to="/security">
            Iniciar sesión
          </Link>
          </button>
        </form>
        
        {/* Enlace Olvidó contraseña? */}
        <div className="mt-8 text-center">
 
          
          <Link
            to="save-password"
            className="text-sm text-gray-500 hover:text-blue-900 transition duration-150"

          >
            ¿Olvidó contraseña?
          </Link>
        </div>

      </div>
    </div>
  );
}