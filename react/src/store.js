import {configureStore,createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {value:0},
    reducers: {}
})

const titleSlice = createSlice({
    name: "title",
    initialState: {text:"titolo"},
    reducers: {}
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {text:[{
        id: 1,
        title: "fare la spesa",
        completed: false,
    },
    {
        id: 2,
        title: "fare esercizi",
        completed: false,
    }
]},
    reducers: {
        toggleTodo: (state, action) => {
            const todo = state.text.find((todo) => todo.id === action.payload.id);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
        deleteTodo: (state, action) => {
            state.text = state.text.filter((todo) => todo.id !== action.payload.id);
        },
    }
})

export const { toggleTodo, deleteTodo } = todoSlice.actions;

export const store = configureStore({
    reducer:{
    counter: counterSlice.reducer,
    title: titleSlice.reducer,
    todo: todoSlice.reducer
}})