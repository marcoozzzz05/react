import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const Todo = () => {
    const {id} = useParams()
    const {data} = useFetch(id ? `https://jsonplaceholder.typicode.com/todos/${id}` : null)

    if(!data) {
        return <p>Loading</p>;
    }

    return (
        <>
            <div>Questo è il todo con id: {id}</div>
            <div>Titolo: {data.title}</div>
            <div>Completed: {data.completed ? "Yes" : "No"}</div>
        </>
    )
}

export default Todo