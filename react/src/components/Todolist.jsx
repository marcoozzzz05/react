
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
import useFilteredTodos from "../hooks/useFilteredTodos";
import { TodoContext } from "./TodoContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Todolist() {
    const { data, loading, stateError } = useContext(TodoContext)
    const [searchTerm, setSearchTerm] = useState("")

    const todo = useSelector((state) => state.todo.text)
    console.log(todo)

    const {filteredTodos} = useFilteredTodos(todo, searchTerm)

    const navigate = useNavigate()

    const memoizedFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("search");

    useEffect(() => {
        if (query) {
            setSearchTerm(query);
        }
    }, [query]);

    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value);

        if (e.target.value) {
            setSearchParams({ search: e.target.value });
        } else {
            setSearchParams({});
        }
    }, [setSearchParams]);

    const inputRef = useRef()
    
    useEffect(() => {
        if (!loading) {
            inputRef.current.focus()
        }
    }, [loading])

    if (loading) return <p>Caricamento...</p>;
    if (stateError) return <p>Errore: {stateError}</p>;

    return (
        <>
            <input type="text" value={searchTerm} onChange={handleChange} ref={inputRef}/>
            <ul>
                {memoizedFilteredTodos &&
                    memoizedFilteredTodos.map(todo => (
                    <li onClick={() => {navigate(`/todo/${todo.id}`)}} key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}