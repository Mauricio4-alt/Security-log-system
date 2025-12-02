export function InputForm({ name, inputType, value, onChange }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input 
        type={inputType} 
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}
