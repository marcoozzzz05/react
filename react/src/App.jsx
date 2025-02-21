import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWord from './components/HelloWord'

function App() {
  const [count, setCount] = useState(0)
  const title = [
    {title: "venerdì"},
    {title: "cipolla"}
    ]
  return (
    <>
      <div>
        {title.map((el,index) => {
          return <div key={index}>
            <HelloWord title={el.title} scrivania="ciao"/>
            <p>calzini</p>
            </div>
        })}
        <HelloWord title="oggi è venerdi"/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <HelloWord title="sedia"/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <HelloWord title="cipolla"/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
