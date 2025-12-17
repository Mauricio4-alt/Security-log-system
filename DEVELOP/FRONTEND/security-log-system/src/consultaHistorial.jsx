import React, { useState } from "react";
import './assets/styles/index.css'



export default function ConsultaHistorial() {
    return (
        <div className="font-sans p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Título Principal */}
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
                        Consulta Historial de Entradas - Salidas
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Busque el historial de entrada y salida de un equipo por el nombre del propietario.
                    </p>
                </header>

                {/* 1. Formulario de Búsqueda */}
                <form className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">

                    <div className="text-base font-semibold text-gray-700 mb-2">
                        Buscar por Nombre del Propietario
                    </div>

                    <div className="flex space-x-6">
                        <input
                            type="text"
                            placeholder="Ej: Freddy Fernando Gomez Espinoza"
                            className="grow p-2 border border-gray-300 rounded-lg"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-3 rounded-lg text-white font-bold bg-green-700 hover:bg-green-800 transition duration-150"
                        >
                            Buscar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}