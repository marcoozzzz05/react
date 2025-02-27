import { useState, useEffect } from 'react'

export default function TextInput() {
    const [input, setInput] = useState("")

    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <>
            <input type="text" onInput={handleInput}/>
            <p>Valore: {input}</p>
        </>
    )
}