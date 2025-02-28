import { useState, useEffect } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function handleInput(e) {
        if (e.target.name == "username") {
            setUsername(e.target.value)
            console.log(username)
        } else {
            setPassword(e.target.value)
            console.log(password)
        }
    }

    function onSubmit(e) {
        e.preventDefault()
        if (password === "" || username ==="") {
            alert("Compila i campi")
            return
        }
        alert(`Username: ${username} Password: ${password}`)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Username:</label>
                <input type="text" name="username" onInput={handleInput}/>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" onInput={handleInput}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}