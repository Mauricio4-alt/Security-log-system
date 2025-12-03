import { InputForm,SelectItems } from "./Tools/componentsTools";
import { useState } from "react";

export default function Registrar() {
    const [information, setInformation] = useState({
        nDocumento: "",
        tDocumento: "",
        nombres: "",
        apellidos: "",
        tipoEquipo: "",
        marcaEquipo: "",
        color: "",
        serial: ""
    });
    const listOptions =[]
    function onHandleChange(e) {
        const { name, value } = e.target;

        setInformation(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form>
            <h2>Registro Equipo</h2>

            <InputForm
                name="nDocumento"
                inputType="text"
                value={information.nDocumento}
                onChange={onHandleChange}
            />

            <InputForm
                name="tDocumento"
                inputType="text"
                value={information.tDocumento}
                onChange={onHandleChange}
            />

            <InputForm
                name="nombres"   
                inputType="text"
                value={information.nombres}
                onChange={onHandleChange}
            />
            <InputForm
                name="apellidos"   
                inputType="text"
                value={information.apellidos}
                onChange={onHandleChange}
            />
            <InputForm
                name="tipoEquipo"   
                inputType="text"
                value={information.tipoEquipo}
                onChange={onHandleChange}
            />
            <InputForm
                name="marcaEquipo"   
                inputType="text"
                value={information.marcaEquipo}
                onChange={onHandleChange}
            />
            <InputForm
                name="color"   
                inputType="text"
                value={information.color}
                onChange={onHandleChange}
            />
            <InputForm
                name="serial"   
                inputType="text"
                value={information.serial}
                onChange={onHandleChange}
            />
            <button type="submit"
            onClick={()=>console.log(information)}
            />
        </form>
    );
}
