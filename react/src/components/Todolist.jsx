
import { useState } from "react";
import useFetch from "../hooks/useFetch"
import useFilteredTodos from "../hooks/useFilteredTodos";

export default function Todolist() {
    const { data, loading, stateError } = useFetch("https://jsonplaceholder.typicode.com/todos")
    const [searchTerm, setSearchTerm] = useState("")

    const {filteredTodos} = useFilteredTodos(data, searchTerm)

    if (loading) return <p>Caricamento...</p>;
    if (stateError) return <p>Errore: {stateError}</p>;

    return (
        <>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <ul>
                {filteredTodos &&
                    filteredTodos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}