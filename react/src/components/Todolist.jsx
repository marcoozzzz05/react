
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
import useFilteredTodos from "../hooks/useFilteredTodos";

export default function Todolist() {
    const { data, loading, stateError } = useFetch("https://jsonplaceholder.typicode.com/todos")
    const [searchTerm, setSearchTerm] = useState("")

    const {filteredTodos} = useFilteredTodos(data, searchTerm)

    const memoizedFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);

    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [])

    const inputRef = useRef()

    const handleFocus = () => {
        inputRef.current.focus()
    }

    if (loading) return <p>Caricamento...</p>;
    if (stateError) return <p>Errore: {stateError}</p>;

    return (
        <>
            <button onClick={handleFocus}>Focus</button>
            <input type="text" value={searchTerm} onChange={handleChange} ref={inputRef}/>
            <ul>
                {memoizedFilteredTodos &&
                    memoizedFilteredTodos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}