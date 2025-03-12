import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"

const App2 = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                </Route >
            </Routes>
        </>
    )
}

export default App2