import { useState } from 'react'
const Form = ({ colorValue }) => {
  const [color, setColor] = useState('')
  const handleColor = (e) => {
    e.preventDefault()
    colorValue(color)
  }
  return (
    <section className="container">
      <h4>Color generator</h4>
      <form className="color-form" onSubmit={handleColor}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: '#417ffb' }}>
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
