import { createContext, useContext } from "react";

export const TodoContext =  createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ], 
    // properties
    addTodo: (todo) => {},
    updateTodo:(id, todo) => {},
    delete: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider