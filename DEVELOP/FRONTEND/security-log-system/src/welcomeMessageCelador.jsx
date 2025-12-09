import React from 'react';
import './assets/styles/index.css'

export default function WelcomeMessage() {
    return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border-2 border-indigo-600/50">
            {/* Se elimina la etiqueta del icono y se ajusta el contenedor principal */}
            <div className='text-center'>
                
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                    👋 Bienvenido Funcionario de Seguridad
                </h2>
                
                <p className="text-lg text-gray-600">
                    Tu rol es fundamental para mantener el control y la seguridad de los equipos.
                </p>
                
                <p className="text-base font-semibold text-indigo-700 mt-4">
                    Utiliza el <strong>MENÚ</strong> para acceder a las funciones de registro, consulta e historial. ¡Comencemos!
                </p>
            </div>
        </div>
    );
}