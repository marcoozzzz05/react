import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function Increment() {
        setCounter((_counter)=> {
            return _counter + 1
        })
    }

    function Decrement() {
        setCounter((_counter) => {
            return _counter - 1
        })
    }

    function Reset() {
        setCounter((_counter) => {
            return _counter = 0
        })
    }

    return (
        <>
        <div>Counter: {counter}</div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}
