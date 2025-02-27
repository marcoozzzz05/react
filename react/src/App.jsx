import { useState } from 'react'
import Counter from './components/Counter'
import TextInput from './components/TextInput'

function App() {
  const [count, setCount] = useState(0)
  const title = [
    {title: "venerdì"},
    {title: "cipolla"}
    ]
  return (
    <>
    <Counter />
    <TextInput />
    </>
  )
}

export default App
