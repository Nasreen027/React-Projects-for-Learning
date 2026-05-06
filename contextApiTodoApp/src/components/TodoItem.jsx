import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {

    const[todoTitle, setTodoTitle] = useState(todo.title || "")
    const[isEditable, setIsEditable] = useState(false);
    const {updateTodo, completeToggle, deleteTodo} = useTodoContext();

    const editTodo = () => {
        console.log('edit todo called');
        updateTodo(todo.id, todoTitle);
        setIsEditable(false);
    }

    const handleToggleComplete = () => {
        completeToggle(todo.id);
    }
    
    const handleDeleteTodo = () => {
        deleteTodo(todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3
                shadow-sm shadow-white/50 duration-300  text-black ${todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleted}
                onChange={handleToggleComplete}
            />
            <input
                type="text"
                className={`
                    border outline-none w-full 
                    bg-transparent rounded-lg 
                    ${isEditable ? "border-black/10 px-2" : "border-transparent"} 
                    ${todo.isCompleted ? "line-through" : ""}`}
                value={todoTitle}
                onChange={(e)=> setTodoTitle(e.target.value)}
                readOnly={!isEditable} 
            />
            {/* Edit, Save Button */}
            <button
            onClick={()=>{
                if(todo.isCompleted) return;
                if(isEditable) {
                    editTodo();
                } else {
                    setIsEditable(true);
                }
            }}
            disabled={todo.isCompleted}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            >
                {isEditable ? '📁' : '✏️'}
            </button>
            {/* Delete Todo Button */}
            <button
            onClick={handleDeleteTodo}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
