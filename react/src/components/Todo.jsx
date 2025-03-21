import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useDispatch, useSelector } from "react-redux"
import { toggleTodo,deleteTodo } from "../store"

const Todo = () => {
    const {id} = useParams()
    const {data} = useFetch(id ? `https://jsonplaceholder.typicode.com/todos/${id}` : null)
    const todo = useSelector((state) => state.todo.text)
    const dispatch = useDispatch()

    const singleTodo = todo.filter((item) => item.id == id) [0]

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo({ id }));
      };
    
      const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
      };
    

    if(!singleTodo || !data) {
        return <p>Loading</p>;
    }

    return (
        <>
            <div>Questo è il todo con id: {id}</div>
            <div>Titolo: {singleTodo.title}</div>
            <div>Completed: {singleTodo?.completed ? "Yes" : "No"}</div>
            <button onClick={() => handleToggleTodo(singleTodo.id)}>
              {singleTodo.completed ? "Non Completato" : "Completato"}
            </button>
            <button onClick={() => handleDeleteTodo(singleTodo.id)}>Elimina</button>
        </>
    )
}

export default Todo