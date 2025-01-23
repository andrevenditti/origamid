import React from 'react'

const useForm = (dataTypeToValidate) => {
  const dataTypes = {
    cep: {
      regex: /^\d{5}-?\d{3}$/,
      message: 'Cep invalido',
    },
    email: {
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email invalido',
    },
  }

  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(valueToValidate) {
    if (dataTypeToValidate === false) true
    if (valueToValidate.length === 0) {
      setError('Prencha um valor')
      return false
    } else if (
      dataTypes[dataTypeToValidate] &&
      !dataTypes[dataTypeToValidate].regex.test(valueToValidate)
    ) {
      setError(dataTypes[dataTypeToValidate].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm
