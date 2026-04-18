import { createContext, useContext } from "react";

export const TodoContext = createContext(
    { 
        todos: [{
            id: '',
            title: '',
            isCompleted: false,
        }],
        addTodo = () => {},
        updateTodo = (todoId) => {},
        deleteTodo = (todoId) => {},
        completeToggle = (todoId) => {},
    }
);

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}