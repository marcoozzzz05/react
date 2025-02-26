import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const title = [
    {title: "venerdì"},
    {title: "cipolla"}
    ]
  return (
    <>
    <Counter />
    </>
  )
}

export default App
