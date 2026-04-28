import { useState } from "react";

function TodoItem({ todo }) {
    const[todoTitle, setTodoTitle] = useState(todo.title)
    const[isEditable, setIsEditable] = useState(true);

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3
                shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg border-transparent`}
                value={todo.title}
                onChange={(e)=> setTodoTitle(e.target.value)}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            >
                ✏️
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
