import { useState, useEffect } from 'react';

export default function useFilteredTodos(todosList, searchTerm) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (todosList) {
            const results = todosList.filter(todo =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTodos(results);
        }
    }, [todosList, searchTerm]);

    return filteredTodos;
}


