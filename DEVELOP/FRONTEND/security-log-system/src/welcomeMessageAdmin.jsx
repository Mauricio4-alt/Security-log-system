import React from "react";
import './assets/styles/index.css'

export default function WelcomeMessageAdmin() {
    return (
        <div className='p-10'>
            <div className="p-6 md:p-10 max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border-2 border-indigo-600/50">
                <div className='text-center'>
                    
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                        👋 Bienvenido Funcionario Administrativo
                    </h2>
                    
                    <p className="text-lg text-gray-600">
                    Tu rol es fundamental para el manejo de la accesibilidad al sistema y verifación de los equipos que ingresan al complejo
                    </p>
                    
                    <p className="text-base font-semibold text-indigo-700 mt-4">
                        Utiliza el <strong>MENÚ</strong> para acceder a las funciones de gestion de cuentas y listado de registros de funcionarios. ¡Comencemos!
                    </p>
                </div>
            </div>
        </div>
    );
}