import { InputForm } from "./Tools/componentsTools"
import { useState } from "react"
import { InputForm } from "./Tools/componentsTools"
export default function Registrar()
{
    const [information,setInformation] = useState({
        nDocument:"",
        tDocumento
    })
    function onHandleChange(e){
        
            const [id,value] = e.target
            setInformation({
                ...prev,
                [id]:value})
    }
    return( <form>
        <h2>Registro Equipo</h2>
        <InputForm 
        name="tipoDocumento" 
        inputType="text" 
        value ={information.tDocumento}
        onChange={onHandleChange}
        />
        
        
    </form>)
}