import "./assets/styles/index.css"
export default function SavePassword() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md space-y-6 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center">
          Restablece tu contraseña
        </h2>
        <h3 className="text-md text-gray-600 text-center mb-6">
          Digita tu correo electrónico para recibir tu nueva contraseña
        </h3>

        <input
          type="email"
          placeholder="Digita tu correo electrónico"
          className="w-full p-3 border-2 border-gray-300 rounded-lg"
          required
        />

        <input
          type="submit"
          value="Enviar"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700  uppercase"
        />
      </div>
    </div>
  );
}
