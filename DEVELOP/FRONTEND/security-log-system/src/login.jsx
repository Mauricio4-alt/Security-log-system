import './assets/styles/login.css'
import { useState } from 'react'

function InputForm({ name, inputType, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <input 
        type={inputType} 
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

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
