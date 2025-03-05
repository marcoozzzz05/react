import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data,setData] = useState()
    const [loading,setLoading] = useState()
    const [stateError,setStateError] = useState()
    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.status)
            }
            const responseJSON = await response.json()
            setData(responseJSON)
        } catch (err) {
            setStateError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return {
        data,
        loading,
        stateError
    }
}