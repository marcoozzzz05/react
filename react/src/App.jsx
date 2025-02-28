import { useState } from 'react'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import LoginForm from './components/LoginForm'
import UncontrolledInput from './components/UncontrolledInput'

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
    <LoginForm />
    <UncontrolledInput />
    </>
  )
}

export default App
