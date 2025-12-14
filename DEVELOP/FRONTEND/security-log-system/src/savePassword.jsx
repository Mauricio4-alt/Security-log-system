import "./assets/styles/savepassword.css"
export default function SavePassword() {
  return (
    <div className="save-password">
      <h2>Restablece tu contraseña</h2>
      <h3>Digita tu correo electrónico para recibir tu nueva contraseña</h3>

      <input
        type="email"
        placeholder="Digita tu correo electrónico"
      />

      <input
        type="submit"
        value="Enviar"
        className="btn-submit"
      />
    </div>
  );
}
