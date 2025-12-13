import React, { useState } from 'react';
import './assets/styles/index.css';

import { CheckCircle, Clock, Search, ChevronLeft, ChevronRight, List, Laptop } from 'lucide-react';

// --- Datos Simulados ---

const datosSimuladosRegistros = [
    { id: 1, marcaEquipo: 'HP', color: 'Negro', serial: 'HPR12345', nombres: 'Carlos', apellidos: 'Gómez', tDocumento: 'CC', nDocumento: '10203040', fechaIngreso: '2023-10-25', horaIngreso: '09:00', estado: 'Completado' },
    { id: 2, marcaEquipo: 'Lenovo', color: 'Gris', serial: 'LNV67890', nombres: 'Ana', apellidos: 'Pérez', tDocumento: 'TI', nDocumento: '40506070', fechaIngreso: '2023-10-25', horaIngreso: '10:30', estado: 'Pendiente' },
    { id: 3, marcaEquipo: 'Dell', color: 'Blanco', serial: 'DEL11223', nombres: 'Juan', apellidos: 'López', tDocumento: 'CE', nDocumento: '80901011', fechaIngreso: '2023-10-26', horaIngreso: '14:00', estado: 'Completado' },
    { id: 4, marcaEquipo: 'Apple', color: 'Plata', serial: 'APL44556', nombres: 'María', apellidos: 'Díaz', tDocumento: 'PEP', nDocumento: '12131415', fechaIngreso: '2023-10-26', horaIngreso: '16:45', estado: 'Completado' },
    { id: 5, marcaEquipo: 'Asus', color: 'Rojo', serial: 'ASU77889', nombres: 'Pedro', apellidos: 'Rodríguez', tDocumento: 'CC', nDocumento: '16171819', fechaIngreso: '2023-10-27', horaIngreso: '08:15', estado: 'Pendiente' },
    { id: 6, marcaEquipo: 'Huawei', color: 'Azul', serial: 'HWA99001', nombres: 'Sofía', apellidos: 'Martínez', tDocumento: 'TI', nDocumento: '20212223', fechaIngreso: '2023-10-27', horaIngreso: '11:20', estado: 'Completado' },
    { id: 7, marcaEquipo: 'HP', color: 'Negro', serial: 'HPR22334', nombres: 'Felipe', apellidos: 'Sánchez', tDocumento: 'CC', nDocumento: '24252627', fechaIngreso: '2023-10-28', horaIngreso: '15:30', estado: 'Completado' },
    { id: 8, marcaEquipo: 'Lenovo', color: 'Gris', serial: 'LNV55667', nombres: 'Elena', apellidos: 'Ramírez', tDocumento: 'PASAPORTE', nDocumento: '28293031', fechaIngreso: '2023-10-28', horaIngreso: '17:00', estado: 'Pendiente' },
    { id: 9, marcaEquipo: 'Dell', color: 'Negro', serial: 'DEL88990', nombres: 'David', apellidos: 'Castro', tDocumento: 'CC', nDocumento: '32333435', fechaIngreso: '2023-10-29', horaIngreso: '09:45', estado: 'Completado' },
    { id: 10, marcaEquipo: 'Apple', color: 'Plata', serial: 'APL00112', nombres: 'Laura', apellidos: 'Vargas', tDocumento: 'CE', nDocumento: '36373839', fechaIngreso: '2023-10-29', horaIngreso: '12:00', estado: 'Completado' },
    // Registros simulados para la 2da página
    { id: 11, marcaEquipo: 'HP', color: 'Blanco', serial: 'HPR40001', nombres: 'Andres', apellidos: 'Suarez', tDocumento: 'CC', nDocumento: '40414243', fechaIngreso: '2023-10-30', horaIngreso: '14:30', estado: 'Completado' },
    { id: 12, marcaEquipo: 'Lenovo', color: 'Rojo', serial: 'LNV44005', nombres: 'Carolina', apellidos: 'Patiño', tDocumento: 'TI', nDocumento: '44454647', fechaIngreso: '2023-10-30', horaIngreso: '16:00', estado: 'Pendiente' },
];

// URLs de imágenes de marcador de posición para el estado
const IMAGENES_ESTADO = { 
    Completado: 'https://placehold.co/24x24/10B981/FFFFFF?text=OK', // Verde para completado
    Pendiente: 'https://placehold.co/24x24/F59E0B/FFFFFF?text=WAIT', // Ámbar para pendiente
};

// --- Componente de la Lista de Registros (Presentacional) ---

const ComponenteListaRegistros = ({ registros, totalPaginas, paginaActual, alCambiarPagina }) => {
    // Configuración de la tabla
    const encabezados = [
        "MARCA EQUIPO", "COLOR EQUIPO", "NÚMERO DE SERIE", "NOMBRES", "APELLIDOS",
        "TIPO DOCUMENTO", "NÚMERO DOCUMENTO", "FECHA INGRESO", "HORA INGRESO", "ESTADO"
    ];

    // Muestra hasta 10 páginas para el prototipo
    const numerosPagina = Array.from({ length: totalPaginas > 10 ? 10 : totalPaginas }, (_, i) => i + 1);

    const obtenerIconoEstado = (estado) => {
        // Usa imágenes placeholder en lugar de íconos de Lucide
        const urlImagen = IMAGENES_ESTADO[estado] || IMAGENES_ESTADO.Error;
        const textoAlternativo = estado === 'Completado' ? 'Completado' : 'Pendiente';
        
        return (
            <img 
                src={urlImagen} 
                alt={`Estado: ${textoAlternativo}`} 
                title={textoAlternativo}
                className="w-6 h-6 mx-auto rounded-full shadow-md"
                // Manejo de error de carga de imagen
                onError={(e) => { e.target.onerror = null; e.target.src=IMAGENES_ESTADO.Error; e.target.alt="Error de Carga"; }} 
            />
        );
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado y Acciones */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center mb-4 md:mb-0">
                        <List className="mr-3 w-8 h-8 text-blue-600" />
                        Lista de Registros
                    </h1>
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Buscar por serial, nombre..."
                            className="w-full p-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    {/* El botón "Nuevo Registro" ha sido eliminado */}
                </div>

                {/* Tabla de Registros (Responsive) */}
                <div className="bg-white rounded-xl shadow-2xl overflow-x-auto border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-50">
                            <tr>
                                {encabezados.map(encabezado => (
                                    <th
                                        key={encabezado}
                                        className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {encabezado}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100 text-sm">
                            {registros.map((registro) => (
                                <tr key={registro.id} className="hover:bg-blue-50/50 transition duration-100">
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.marcaEquipo}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.color}</td>
                                    <td className="px-4 py-3 font-mono text-gray-900 whitespace-nowrap">{registro.serial}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{registro.nombres}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{registro.apellidos}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.tDocumento}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.nDocumento}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.fechaIngreso}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{registro.horaIngreso}</td>
                                    <td className="px-4 py-3 text-center">{obtenerIconoEstado(registro.estado)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {registros.length === 0 && (
                         <div className="text-center py-10 text-gray-500">
                             No hay registros disponibles.
                         </div>
                    )}
                </div>

                {/* Paginación */}
                <div className="flex justify-center items-center space-x-2 mt-8">
                    <button
                        onClick={() => alCambiarPagina(paginaActual - 1)}
                        disabled={paginaActual === 1}
                        className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50 transition duration-150"
                        title="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <nav className="flex space-x-1" aria-label="Pagination">
                        {numerosPagina.map(numero => (
                            <button
                                key={numero}
                                onClick={() => alCambiarPagina(numero)}
                                className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
                                    numero === paginaActual
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50'
                                }`}
                            >
                                {numero}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => alCambiarPagina(paginaActual + 1)}
                        disabled={paginaActual >= totalPaginas}
                        className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50 transition duration-150"
                        title="Siguiente"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Componente Principal de la Aplicación (Maneja la Lógica de Paginación) ---

export default function ListaRegistros() {
    // Estados para la Lista de Registros (Simulación de paginación)
    const registrosPorPagina = 10;
    const [paginaActual, setPaginaActual] = useState(1);
    const totalRegistros = datosSimuladosRegistros.length;
    const totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);

    // Lógica para obtener los registros de la página actual
    const obtenerRegistrosParaPagina = (pagina) => {
        const inicio = (pagina - 1) * registrosPorPagina;
        const fin = inicio + registrosPorPagina;
        return datosSimuladosRegistros.slice(inicio, fin);
    };

    const manejarCambioPagina = (pagina) => {
        if (pagina > 0 && pagina <= totalPaginas) {
            setPaginaActual(pagina);
        }
    };

    const registrosActuales = obtenerRegistrosParaPagina(paginaActual);

    return (
        <div className="font-sans antialiased bg-gray-50">
            <main className="pb-10">
                <ComponenteListaRegistros
                    registros={registrosActuales}
                    totalPaginas={totalPaginas}
                    paginaActual={paginaActual}
                    alCambiarPagina={manejarCambioPagina}
                />
            </main>
        </div>
    );
}