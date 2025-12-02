export function InputForm({ name, inputType, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <input 
        type={inputType} 
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}
export function SelectItems({name,id,listOptions}){
    const options =[]
 return (<div className='form-column'>
                        
                        <label htmlFor={id}>{name}</label>
                        <select
                            id={id}
                            name={id}
                            className='form-input'
                        >
                            {listOptions.map(((element)=>(
                                <option key={element} value={element}>{element}</option>
                            )))}
                        </select>
                        </div>)}
    
    