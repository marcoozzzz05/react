import Todolist from "../components/Todolist"
import { TodoProvider } from "../provider/TodoProvider"

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Todolist />
        </>
    )
}

export default Home