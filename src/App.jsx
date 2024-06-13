import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'
import { toast, ToastContainer } from 'react-toastify'
const App = () => {
  const [colors, setColors] = useState(new Values('#417ffb').all(10))
  const colorValue = (color) => {
    try {
      const newColorValue = new Values(color).all(10)
      setColors(newColorValue)
    } catch (error) {
      toast.error('Your value is incorrect')
    }
  }
  return (
    <main>
      <Form colorValue={colorValue} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
