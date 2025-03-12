import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()

    function toHome() {
        navigate("/")
    }

    return (
        <>
            <h1>About</h1>
            <div>Questa applicazione permette di visualizzare le to-do</div>
            <button onClick={toHome}>Home</button>
        </>
    )
}

export default About