import { useState, useEffect } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleInput() {
        
    }

    return (
        <>
            <form action="">
                <label htmlFor="">Username:</label>
                <input type="text" name="username" onInput={handleInput}/>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" onInput={handleInput}/>
            </form>
        </>
    )
}