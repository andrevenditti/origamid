import React from 'react'
const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <label>
        {label}
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
