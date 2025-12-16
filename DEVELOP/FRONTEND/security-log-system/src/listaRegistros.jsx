import React, { useState } from 'react';
import './assets/styles/index.css';

// --- Datos Simulados ---

const datosSimuladosRegistros = [
    { marcaEquipo: 'HP', color: 'Negro', serial: 'HPR12345', nombres: 'Carlos Jose', apellidos: 'Gómez Parra', tDocumento: 'CC', nDocumento: '10203040', fechaIngreso: '2023-10-25', horaIngreso: '09:00', estado: 'Pendiente' },
    { marcaEquipo: 'Lenovo', color: 'Gris', serial: 'LNV67890', nombres: 'Ana Carolina', apellidos: 'Pérez Estrada', tDocumento: 'TI', nDocumento: '40506070', fechaIngreso: '2023-10-25', horaIngreso: '10:30', estado: 'Pendiente' },
    { marcaEquipo: 'Dell', color: 'Blanco', serial: 'DEL11223', nombres: 'Juan Alberto', apellidos: 'López Pastrana', tDocumento: 'CE', nDocumento: '80901011', fechaIngreso: '2023-10-26', horaIngreso: '14:00', estado: 'Pendiente' },
    { marcaEquipo: 'Apple', color: 'Plata', serial: 'APL44556', nombres: 'María Jose', apellidos: 'Díaz Carrillo', tDocumento: 'PEP', nDocumento: '12131415', fechaIngreso: '2023-10-26', horaIngreso: '16:45', estado: 'OK' },
    { marcaEquipo: 'Asus', color: 'Rojo', serial: 'ASU77889', nombres: 'Pedro Santiago', apellidos: 'Rodríguez Paez', tDocumento: 'CC', nDocumento: '16171819', fechaIngreso: '2023-10-27', horaIngreso: '08:15', estado: 'OK' },
    { marcaEquipo: 'Huawei', color: 'Azul', serial: 'HWA99001', nombres: 'Sofía Clara', apellidos: 'Martínez Martínez', tDocumento: 'TI', nDocumento: '20212223', fechaIngreso: '2023-10-27', horaIngreso: '11:20', estado: 'OK' },
    { marcaEquipo: 'HP', color: 'Negro', serial: 'HPR22334', nombres: 'Felipe Andres', apellidos: 'Sánchez Rodriguez', tDocumento: 'CC', nDocumento: '24252627', fechaIngreso: '2023-10-28', horaIngreso: '15:30', estado: 'OK' },
    { marcaEquipo: 'Lenovo', color: 'Gris', serial: 'LNV55667', nombres: 'Elena Sofia', apellidos: 'Ramírez Hernandez', tDocumento: 'PASAPORTE', nDocumento: '28293031', fechaIngreso: '2023-10-28', horaIngreso: '17:00', estado: 'OK' },
    { marcaEquipo: 'Dell', color: 'Negro', serial: 'DEL88990', nombres: 'Carlos David', apellidos: 'Castro Pascagaza', tDocumento: 'CC', nDocumento: '32333435', fechaIngreso: '2023-10-29', horaIngreso: '09:45', estado: 'OK' },
    { marcaEquipo: 'Apple', color: 'Plata', serial: 'APL00112', nombres: 'Laura Valentina', apellidos: 'Vargas Artigas', tDocumento: 'CE', nDocumento: '36373839', fechaIngreso: '2023-10-29', horaIngreso: '12:00', estado: 'OK' },
    { marcaEquipo: 'HP', color: 'Blanco', serial: 'HPR40001', nombres: 'Andres Felipe', apellidos: 'Suarez Lopez', tDocumento: 'CC', nDocumento: '40414243', fechaIngreso: '2023-10-30', horaIngreso: '14:30', estado: 'OK' },
    { marcaEquipo: 'Lenovo', color: 'Rojo', serial: 'LNV44005', nombres: 'Anabel Carolina', apellidos: 'Patiño Gomez', tDocumento: 'TI', nDocumento: '44454647', fechaIngreso: '2023-10-30', horaIngreso: '16:00', estado: 'OK' },
];

// --- Componente de la Lista de Registros (Presentacional) ---

const ComponenteListaRegistros = ({ registros }) => {
    // Configuración de la tabla
    const encabezados = [
        "MARCA EQUIPO", "COLOR EQUIPO", "NÚMERO DE SERIE", "NOMBRES", "APELLIDOS",
        "TIPO DOCUMENTO", "NÚMERO DOCUMENTO", "FECHA INGRESO", "HORA INGRESO", "ESTADO"
    ];

    return (
        <div className="p-8">
            <div className="max-w-7xl">
                {/* Encabezado y Acciones */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
                        Lista de Registros
                    </h1>
                    <div className="relative md:w-64">
                        <input
                            type="text"
                            placeholder="Buscar por serial o nombre"
                            className="w-full p-2 text-center border border-gray-300 rounded-lg shadow-sm"
                        />
                    </div>
                </div>

                {/* Tabla de Registros (Responsive) */}
                <div className="bg-white rounded-xl shadow-2xl overflow-x-auto border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-50">
                            <tr>
                                {encabezados.map(encabezado => (
                                    <th key={encabezado} className="bg-blue-700 px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider whitespace-nowrap">
                                        {encabezado}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {registros.map((registro) => (
                                <tr className="hover:bg-blue-50/50 transition duration-100">
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.marcaEquipo}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.color}</td>
                                    <td className="px-4 py-3 font-mono text-gray-900 whitespace-nowrap">{registro.serial}</td>
                                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{registro.nombres}</td>
                                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{registro.apellidos}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.tDocumento}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.nDocumento}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.fechaIngreso}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center">{registro.horaIngreso}</td>
                                    {/* Muestra el estado directamente como texto sin formato condicional */}
                                    <td className="px-4 py-3 whitespace-nowrap text-gray-900 font-bold text-center">
                                        {registro.estado}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- Componente Principal de la Aplicación ---

export default function ListaRegistros() {
    return (
        <div>
            <main className="pb-10">
                <ComponenteListaRegistros
                    // Se pasa la lista completa de registros directamente
                    registros={datosSimuladosRegistros}
                />
            </main>
        </div>
    );
}