
import useFetch from "../hooks/useFetch"

export default function Todolist() {
    const { data, loading, stateError } = useFetch("https://jsonplaceholder.typicode.com/todos")
    if (loading) return <p>Caricamento...</p>;
    if (stateError) return <p>Errore: {stateError}</p>;
    return (
        <>
            <ul>
                {data && 
                    data.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}