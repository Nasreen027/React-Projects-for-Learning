import { createContext, useContext } from "react";

export const TodoContext = createContext({ 
    todos: [{
        id: '',
        title: '',
        isCompleted: false,
    }],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    completeToggle : (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}