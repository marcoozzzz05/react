import { useState } from 'react'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import LoginForm from './components/LoginForm'
import UncontrolledInput from './components/UncontrolledInput'
import ItemsList from './components/ItemsList'
import Card from './components/Card'
import useFetch from './hooks/useFetch'

function App() {
  const [count, setCount] = useState(0)
  const title = [
    {title: "venerdì"},
    {title: "cipolla"}
    ]
  const people = ["Mario","Davide","Andrea","Luca"]
  const {data,loading,stateError} = useFetch("https://jsonplaceholder.typicode.com/users")
  if (loading) return <p>Caricamento...</p>;
  if (stateError) return <p>Errore: {stateError}</p>;
  return (
    <>
    <Counter />
    <TextInput />
    <LoginForm />
    <UncontrolledInput />
    <ItemsList items={people}/>
    <Card>
      <h2>Prova Card</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed in omnis adipisci odio ipsum quisquam, ex optio quod dolorem repellat!</p>
    </Card>
    <div>
      {data &&
        data.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
    </div>
    </>
  )
}

export default App
