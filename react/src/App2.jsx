import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

const App2 = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </>
    )
}

export default App2