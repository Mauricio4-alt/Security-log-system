import './assets/styles/ingreso.css'
// usa esta función para crear tus componentes de registro de equipo
export default function Ingreso()
{
    return (
    <>
    <div className='form-container'>
        <h2 className='form-title'>Registro Equipo</h2>

        <form className='equipo-form'>

            {/* Contenedor principal del grid: dos columnas */}
            <div className='form-grid'>

                {/* Columna izquierda - Datos Personales*/}
                <div className='form-column'>
                    <label htmlFor='numeroDocumento'>Numero de Documento</label>
                    <input 
                        type="text" 
                        id='numeroDocumento'
                        name='numeroDocumento'
                        className='form-input'
                    />

                    <label htmlFor='tipoDocumento'>Tipo de Documento</label>
                    <select
                        id='tipoDocumento'
                        name='tipoDocumento'
                        className='form-input'
                    >
                        <option value="">Seleccionar</option>
                        <option value="cc">CC</option>
                        <option value="ti">TI</option>
                        <option value="ce">CE</option>
                        <option vlaue="te">TE</option>
                        <option value="pa">Pasaporte</option>
                        <option value="pep">PEP</option>
                        <option value="ppt">PPT</option>
                    </select>

                    <label htmlFor='nombres'>Nombres</label>
                    <input
                        type='text'
                        id='nombres'
                        name='nombres'
                        className='form-input'
                    />

                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                        type='text'
                        id='apellidos'
                        name='apellidos'
                        className='form-input'
                    />

                    {/* Columna derecha - Datos del Equipo*/}
                    <div className='form-column'>
                        <label htmlFor='tipoEquipo'>Tipo Equipo</label>
                        <select
                            id='tipoEquipo'
                            name='TipoEquipo'
                            className='form-input'
                        >
                            <option value="">Seleccionar</option>
                            <option value="portatil">Portatil</option>
                            <option value="camara">Camara</option>
                            <option value="teclado">Teclado</option>
                            <option value="mouse">Mouse</option>
                        </select>

                        <label htmlFor='marcaEquipo'>Marca Equipo</label>
                        <select 
                            id="marcaEquipo" 
                            name="marcaEquipo"
                            className='form-input'
                        >
                            <option value="">Seleccionar</option>
                            <option value="hp">HP</option>
                            <option value="lenovo">Lenovo</option>
                            <option value="dell">Dell</option>
                            <option value="asus">Asus</option>
                            <option value="huawei">Huawei</option>
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="acer">Acer</option>
                            <option value="razer">Razer</option>
                            <option value="msi">MSI</option>
                        </select>

                        <label htmlFor="color">Color</label>
                        <select 
                            id="color" 
                            name="color"
                            className='form-input'
                        >
                            <option value="">Seleccionar</option>
                            <option value="negro">Negro</option>
                            <option value="blanco">Blanco</option>
                            <option value="azul">Azul</option>
                            <option value="azul-oscuro">Azul Oscuro</option>
                            <option value="plateado">Plateado</option>
                            <option value="rojo">Rojo</option>
                            <option value="verde">Verde</option>
                            <option value="rosa">Rosa</option>
                        </select>

                        <label htmlFor="serial">Serial</label>
                        <input 
                            type='text'
                            id='serial'
                            name='serial'
                            className='form-input' 
                        />
                    </div>
                </div>

                {/* SECCION DE BOTONES */}
                <div className='form-actions'>
                    <button type='button' className='btn btn-secondary'>
                        Cancelar
                    </button>

                    <button type='button' className='btn btn-primary'>
                        Anadir otro equipo
                    </button>

                    <button type='submit' className='btn btn-success'>
                        Guardar registro
                    </button>

                </div>
            </div>
        </form>
    </div>
    </>);
}