
import { useCallback, useMemo, useState } from "react";
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

    if (loading) return <p>Caricamento...</p>;
    if (stateError) return <p>Errore: {stateError}</p>;

    return (
        <>
            <input type="text" value={searchTerm} onChange={handleChange} />
            <ul>
                {memoizedFilteredTodos &&
                    memoizedFilteredTodos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}