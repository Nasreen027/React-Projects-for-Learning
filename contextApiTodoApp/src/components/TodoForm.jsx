import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
    const [title, setTitle] = useState('');
    const {addTodo} = useTodoContext();

    const handleTodoFormSubmit = (e) => {
        e.preventDefault();
        if(title.trim().length === 0) return;
        addTodo({ id: Date.now(), title, completed:false });
        setTitle('');
    }
    return (
        <form onSubmit={handleTodoFormSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm