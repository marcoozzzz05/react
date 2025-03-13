import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Todo from "./components/Todo"
import { TodoProvider } from "./provider/TodoProvider"

const App2 = () => {
    return (
        <>
            <TodoProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="todo/:id" element={<Todo />}/>
                    <Route path="about" element={<About />}/>
                </Route >
            </Routes>
            </TodoProvider>
        </>
    )
}

export default App2