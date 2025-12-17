import "./assets/styles/index.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState("security");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    console.log("Login:", { usuario, contrasena, rol });

    // Aquí iría la validación real
    navigate(`/${rol}`);

    // Limpieza opcional
    setUsuario("");
    setContrasena("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md">
        
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-blue-700 bg-blue-100 inline-block px-6 py-2 rounded-lg shadow-inner border-2 border-blue-500 tracking-wider uppercase">
            ¡Bienvenido!
          </h1>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Usuario */}
          <div>
            <label
              htmlFor="usuario"
              className="block text-sm font-semibold text-gray-700 mb-2 uppercase"
            >
              Usuario
            </label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-sm"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <label
              htmlFor="contrasena"
              className="block text-sm font-semibold text-gray-700 mb-2 uppercase"
            >
              Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-sm"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {/* Rol */}
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 text-sm font-semibold">
              <input
                type="radio"
                name="rol"
                value="security"
                checked={rol === "security"}
                onChange={(e) => setRol(e.target.value)}
              />
              Seguridad
            </label>

            <label className="flex items-center gap-2 text-sm font-semibold">
              <input
                type="radio"
                name="rol"
                value="admin"
                checked={rol === "admin"}
                onChange={(e) => setRol(e.target.value)}
              />
              Admin
            </label>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Recuperar contraseña */}
        <div className="mt-8 text-center">
          <Link
            to="/save-password"
            className="text-sm text-gray-500 hover:text-blue-600 hover:underline transition"
          >
            ¿Olvidó contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}
