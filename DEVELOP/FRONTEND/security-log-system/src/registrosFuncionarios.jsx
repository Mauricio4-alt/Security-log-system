import React, { useState } from "react";
import "./assets/styles/index.css";

// --- Datos Simulados Registros Celadores ---

const datosSimuladosRegistrosFuncionarios = [
    { celador: 'Maria Rodriguez', marcaEquipo: 'HP', color: 'Negro', serial: 'HPR12345', nombres: 'Carlos Jose', apellidos: 'Gómez Parra', tDocumento: 'CC', nDocumento: '10203040', fechaIngreso: '2025-10-30', horaIngreso: '09:00', },
    { celador: 'Maria Rodriguez', marcaEquipo: 'Lenovo', color: 'Gris', serial: 'LNV67890', nombres: 'Ana Carolina', apellidos: 'Pérez Estrada', tDocumento: 'TI', nDocumento: '40506070', fechaIngreso: '2025-10-30', horaIngreso: '10:30', },
    { celador: 'Alexis Santa Cruz', marcaEquipo: 'Dell', color: 'Blanco', serial: 'DEL11223', nombres: 'Juan Alberto', apellidos: 'López Pastrana', tDocumento: 'CE', nDocumento: '80901011', fechaIngreso: '2025-10-29', horaIngreso: '14:00', },
    { celador: 'Alexis Santa Cruz', marcaEquipo: 'Apple', color: 'Plata', serial: 'APL44556', nombres: 'María Jose', apellidos: 'Díaz Carrillo', tDocumento: 'PEP', nDocumento: '12131415', fechaIngreso: '2025-10-29', horaIngreso: '16:45', },
    { celador: 'Rodolfo Guintana', marcaEquipo: 'Asus', color: 'Rojo', serial: 'ASU77889', nombres: 'Pedro Santiago', apellidos: 'Rodríguez Paez', tDocumento: 'CC', nDocumento: '16171819', fechaIngreso: '2025-10-28', horaIngreso: '08:15', },
    { celador: 'Rodolfo Guintana', marcaEquipo: 'Huawei', color: 'Azul', serial: 'HWA99001', nombres: 'Sofía Clara', apellidos: 'Martínez Martínez', tDocumento: 'TI', nDocumento: '20212223', fechaIngreso: '2025-10-28', horaIngreso: '11:20', },
    { celador: 'Alexis Santa Cruz', marcaEquipo: 'HP', color: 'Negro', serial: 'HPR22334', nombres: 'Felipe Andres', apellidos: 'Sánchez Rodriguez', tDocumento: 'CC', nDocumento: '24252627', fechaIngreso: '2025-10-27', horaIngreso: '15:30', },
    { celador: 'Alexis Santa Cruz', marcaEquipo: 'Lenovo', color: 'Gris', serial: 'LNV55667', nombres: 'Elena Sofia', apellidos: 'Ramírez Hernandez', tDocumento: 'PASAPORTE', nDocumento: '28293031', fechaIngreso: '2025-10-27', horaIngreso: '17:00', },
    { celador: 'Maria Rodriguez', marcaEquipo: 'Dell', color: 'Negro', serial: 'DEL88990', nombres: 'Carlos David', apellidos: 'Castro Pascagaza', tDocumento: 'CC', nDocumento: '32333435', fechaIngreso: '2025-10-26', horaIngreso: '09:45', },
    { celador: 'Maria Rodriguez', marcaEquipo: 'Apple', color: 'Plata', serial: 'APL00112', nombres: 'Laura Valentina', apellidos: 'Vargas Artigas', tDocumento: 'CE', nDocumento: '36373839', fechaIngreso: '2025-10-26', horaIngreso: '12:00', },
    { celador: 'Rodolfo Guintana', marcaEquipo: 'HP', color: 'Blanco', serial: 'HPR40001', nombres: 'Andres Felipe', apellidos: 'Suarez Lopez', tDocumento: 'CC', nDocumento: '40414243', fechaIngreso: '2025-10-25', horaIngreso: '14:30', },
    { celador: 'Rodolfo Guintana', marcaEquipo: 'Lenovo', color: 'Rojo', serial: 'LNV44005', nombres: 'Anabel Carolina', apellidos: 'Patiño Gomez', tDocumento: 'TI', nDocumento: '44454647', fechaIngreso: '2025-10-25', horaIngreso: '16:00', },
];

// --- Componente de la Lista de Registros (Presentacional) ---

const ListaRegistrosFuncionarios = ({ registrosFuncionarios }) => {
    // Configuración de la tabla
    const encabezados = [
        "CELADOR", "MARCA EQUIPO", "COLOR EQUIPO", "NÚMERO DE SERIE", "NOMBRES", "APELLIDOS",
        "TIPO DOCUMENTO", "NÚMERO DOCUMENTO", "FECHA INGRESO", "HORA INGRESO",
    ];

    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado y Acciones */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
                        Lista Registros Funcionarios
                    </h1>
                </div>

                {/* Tabla de Registros Funcionarios (Responsive) */}
                <div className="bg-white rounded-xl shadow-2xl overflow-x-auto border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-50">
                            <tr>
                                {encabezados.map(encabezado => (
                                    <th key={encabezado} className="bg-green-700 px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider whitespace-nowrap">
                                        {encabezado}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {registrosFuncionarios.map((registro) => (
                                <tr className="hover:bg-blue-50 transition duration-100">
                                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{registro.celador}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.marcaEquipo}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.color}</td>
                                    <td className="px-4 py-3 font-mono text-gray-900 whitespace-nowrap">{registro.serial}</td>
                                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{registro.nombres}</td>
                                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{registro.apellidos}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.tDocumento}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.nDocumento}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.fechaIngreso}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.horaIngreso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end pt-3">
                    <button 
                        type="button" 
                        className="py-2 px-4 rounded-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 transition duration-150" 
                        onClick={()=> alert("Se genero el informe correctamente")}> 
                        Generar informe
                    </button>  
                </div>                
            
            </div>
        </div>
    );
};

// --- Componente Principal ---

export default function RegistrosFuncionarios() {
        return (
        <div>
            <main className="pb-10">
                <ListaRegistrosFuncionarios
                    // Se pasa la lista completa de registros directamente
                    registrosFuncionarios={datosSimuladosRegistrosFuncionarios}
                />
            </main>
        </div>
    );
}
