import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([]);
  addTodo = (title) => {
    setTodos([...todos, {
      id: Date.now(),
      title,
      isCompleted: false,
    }])
  };
  updateTodo = (todo) => {
    setTodos((prev)=> prev.map((t)=> t.id === todo.id ? todo : t))
  };
  deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((t)=> t.id !== id))
  };
  completeToggle = (id) => {
    setTodos((prev) => prev.find((t) => t.id === id ? {...t, isCompleted: !t.isCompleted} : t))
  }
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);
  
  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
    if(todosFromLocalStorage && todosFromLocalStorage.length > 0) {
      setTodos(todosFromLocalStorage);
    };
  },[])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, completeToggle}}>
      
    </TodoProvider>
  )
}

export default App
