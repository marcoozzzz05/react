import Todolist from "../components/Todolist"
import { TodoProvider } from "../provider/TodoProvider"

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <TodoProvider>
                <Todolist />
            </TodoProvider>
        </>
    )
}

export default Home