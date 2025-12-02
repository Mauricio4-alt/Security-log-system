import './assets/styles/login.css'
import { useState } from 'react'
import { InputForm } from './Tools/componentsTools';

export default function Login() {

  const [values, setValues] = useState({
    user: "",
    password: ""
  });

  function handleChange(e) {
    const { id, value } = e.target;

    // actualiza la información necesaria
    setValues(prev => ({
      ...prev,
      [id]: value
    }));

    console.log(values); // ver cambios en consola
  }

  return (
    <div className="Login-container">
      <div className="Login-card">
        <h2>BIENVENIDO</h2>

        <form>
          {/* CAMPO USUARIO */}
          <InputForm 
            name="Usuario"
            inputType="text"
            value={values.user}
            onChange={handleChange}
          />

          {/* CAMPO CONTRASEÑA */}
          <InputForm 
            name="Contraseña"
            inputType="password"
            value={values.password}
            onChange={handleChange}
          />

          {/* BOTON INICIAR SESIÓN */}
          <button type="submit" className="login-button">Iniciar sesión</button>

          {/* BOTON OLVIDO CONTRASEÑA */}
          <p className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
        </form>
      </div>
    </div>
  )
}
