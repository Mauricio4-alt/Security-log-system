import "./assets/styles/index.css"

export default function Funcionarios() {
  const cabeceras = [
    "nombre",
    "carnet",
    "tipo de documento",
    "numero de Documento",
    "numero de Contacto",
    "correo",
    "usuario",
    "contraseña"
  ];

  const listaFuncionarios = [
    {
      nombre: "Maria Rodriguez",
      carnet: "140",
      tipoDocumento: "CC",
      nDocumento: "3311973",
      nContacto: "310220221",
      correo: "mariarsecurity@hotmail.com",
      usuario: "funcioario1",
      contrasena: "601"
    },
    {
      nombre: "Alexis Santacruz",
      carnet: "141",
      tipoDocumento: "CC",
      nDocumento: "300084561",
      nContacto: "3172011149",
      correo: "alexissecurity@hotmail.com",
      usuario: "funcionario2",
      contrasena: "1004"
    },
    {
      nombre: "Rodolfo Guintana",
      carnet: "142",
      tipoDocumento: "CC",
      nDocumento: "310084561",
      nContacto: "3173411149",
      correo: "rodolfosecurity@hotmail.com",
      usuario: "funcionario3",
      contrasena: "1007"
    }
  ];

  return (<>
  <div className="max-w-7x1 mx-auto p-8">
    <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Lista de Funcionarios</h1>
    <div className="rounded-xl shadow-2xl overflow-x-auto border border-gray-200 mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-50">
          <tr>
            {cabeceras.map(cabecera => (
              <th key={cabecera} 
                className="bg-green-700 px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider whitespace-nowrap">
                {cabecera}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-100">
          {listaFuncionarios.map((funcionario, index) => (
            <tr className="">
              <td className="px-4 py-3 whitespace-nowrap text-gray-700 font-medium">{funcionario.nombre}</td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-600">{funcionario.carnet}</td>
              <td className="px-4 py-3 whitespace-nowrap">{funcionario.tipoDocumento}</td>
              <td className="px-4 py-3 whitespace-nowrap">{funcionario.nDocumento}</td>
              <td className="px-4 py-3 whitespace-nowrap">{funcionario.nContacto}</td>
              <td className="px-4 py-3 whitespace-nowrap text-blue-600">{funcionario.correo}</td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-900">{funcionario.usuario}</td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-500">{funcionario.contrasena}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-end">
      <button type="button" className="py-2 px-4 rounded-lg font-semibold text-white bg-red-700 hover:bg-red-800 transition duration-150" onClick={()=> alert("Se elimino el registro")}> Eliminar cuenta</button>      
      <button type="button" className="py-2 px-4 rounded-lg font-semibold text-white bg-indigo-700 hover:bg-indigo-800 transition duration-150" onClick={()=> alert("Se actualizó el registro")}>Actualizar cuenta</button>
      <button type="button" className="py-2 px-4 rounded-lg font-semibold text-white bg-lime-700 hover:bg-lime-800 transition duration-150" onClick={()=> alert("Se elimino el registro")}> Agregar cuenta</button>  
    </div>
  </div>
  </>
  );
}
