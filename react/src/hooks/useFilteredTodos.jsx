import { useState, useEffect } from 'react';

export default function useFilteredTodos(todosList, searchTerm) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const results = todosList.filter(todo =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTodos(results);
        } else {
            setFilteredTodos(todosList)
        }
    }, [todosList, searchTerm]);

    return {filteredTodos};
}


