import "./assets/styles/funcionarios.css"


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
      nombre: "Alexis santacruz",
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
    <table>
      <thead>
        <tr>
          {cabeceras.map(cabecera => (
            <th key={cabecera}>{cabecera}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {listaFuncionarios.map((funcionario, index) => (
          <tr key={index}>
            <td>{funcionario.nombre}</td>
            <td>{funcionario.carnet}</td>
            <td>{funcionario.tipoDocumento}</td>
            <td>{funcionario.nDocumento}</td>
            <td>{funcionario.nContacto}</td>
            <td>{funcionario.correo}</td>
            <td>{funcionario.usuario}</td>
            <td>{funcionario.contrasena}</td>
          </tr>
        ))}
      </tbody>

    </table>
    <button type="button" className="boton-func" onClick={()=> alert("Se actualizó el registro")}>actualizar registro</button>
    <button type="button" className="boton-func" onClick={()=> alert("Se elimino el registro")}> eliminar registro</button>
    
    </>
  );
}
