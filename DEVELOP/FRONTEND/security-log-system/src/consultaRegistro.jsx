import React, { useState } from 'react';
import './assets/styles/index.css';

export default function ConsultaRegistro() {
    // Las variables y funciones placeholder han sido eliminadas.
    
    return (
        <div className="font-sans p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Título Principal */}
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
                        Consultar Registro para Autorizar Salida
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Busque un equipo por su Número de Serie o Documento para revisar su estado y autorizar su salida.
                    </p>
                </header>

                {/* 1. Formulario de Búsqueda */}
                <form className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">

                    <div className="text-base font-semibold text-gray-700 mb-2">
                        Buscar por N° de Serie o N° de Documento
                    </div>

                    <div className="flex space-x-6">
                        <input
                            type="text"
                            placeholder="Ej: LNV67890 o 10203040"
                            className="grow p-2 border border-gray-300 rounded-lg"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-3 rounded-lg text-white font-bold bg-blue-700 hover:bg-blue-800 transition duration-150"
                        >
                            Buscar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}