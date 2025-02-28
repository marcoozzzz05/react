import { useRef } from "react"

export default function UncontrolledInput() {
    const ref = useRef("")

    function handleButton() {
        alert(ref.current.value)
    }

    return (
        <>
            <input type="text" ref={ref}/>
            <button onClick={handleButton}>Alert</button>
            {ref.current}
        </>
    )
}