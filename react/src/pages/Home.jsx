import Todolist from "../components/Todolist"
import { TodoProvider } from "../provider/TodoProvider"
import { useSelector } from "react-redux"

const Home = () => {
    const count = useSelector((state) => state.counter.value)

    return(
        <>
            <h1>Home: {count}</h1>
            <Todolist />
        </>
    )
}

export default Home