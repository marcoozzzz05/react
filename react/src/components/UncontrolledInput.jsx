import { useRef } from "react"

export default function UncontrolledInput() {
    const ref = useRef("")

    return (
        <>
            <input type="text" ref={ref}/>
        </>
    )
}