const Radio = ({ pergunta, onChange, options, value, active, id }) => {
  if (active === false) return null
  return (
    <>
      <fieldset
        style={{
          padding: '2em',
          marginBottom: '2em',
          border: '2px, solid #eee',
        }}
      >
        <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
        {options.map((option) => (
          <label
            key={option}
            style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
          >
            <input
              type="radio"
              id={id}
              checked={value === option}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  )
}

export default Radio
