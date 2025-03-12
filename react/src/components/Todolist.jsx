
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
import useFilteredTodos from "../hooks/useFilteredTodos";
import { TodoContext } from "./TodoContext";

export default function Todolist() {
    const { data, loading, stateError } = useContext(TodoContext)
    const [searchTerm, setSearchTerm] = useState("")

    const {filteredTodos} = useFilteredTodos(data, searchTerm)

    const memoizedFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);

    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [])

    const inputRef = useRef()
    
    useEffect(() => {
        if (!loading) {
            inputRef.current.focus()
        }
    }, [loading])

    if (loading) return <p>Caricamento...</p>;
    if (stateError) return <p>Errore: {stateError}</p>;

    return (
        <>
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