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
