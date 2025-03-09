import useFetch from "../hooks/useFetch";
import { TodoContext } from "../components/TodoContext";

export const TodoProvider = ({ children }) => {
    const { data,loading,stateError } = useFetch("https://jsonplaceholder.typicode.com/todos")

    return(
        <TodoContext.Provider value={{ data,loading,stateError }}>
            {children}
        </TodoContext.Provider>
    )
}