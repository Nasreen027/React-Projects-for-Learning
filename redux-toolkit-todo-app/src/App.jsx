import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen items-center px-4">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
