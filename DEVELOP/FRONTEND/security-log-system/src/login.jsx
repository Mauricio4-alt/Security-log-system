import './assets/styles/login.css'

export default function Login()
{
    return(<>
         <div className="Login-container">
            <div className="Login-card">
                <h2>Inicio de Sesión</h2>

                <form>

                    {/* CAMPO USUARIO */}
                    <div className="input-group">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" id="usuario" required
                        />
                    </div>

                    {/* CAMPO CONTRASEÑA*/}
                    <div className="input-group">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password" id="password" required/>
                    </div>

                    {/* BOTON INICIAR SESIÓN */}
                    <button type="submit" className="login-button"> Iniciar sesión</button>

                    {/* BOTON OLVIDO CONTRSEÑA */}
                    <p className="forgot-password">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </p>
                </form>
            </div>
         </div>
    </>)
}