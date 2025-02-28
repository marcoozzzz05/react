import { useState } from 'react'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import LoginForm from './components/LoginForm'
import UncontrolledInput from './components/UncontrolledInput'
import ItemsList from './components/ItemsList'

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
    <ItemsList />
    </>
  )
}

export default App
