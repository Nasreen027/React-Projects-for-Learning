import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import AlertBox from "./customAlertBox";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      {error && (
        <AlertBox
          type="error"
          title="Error"
          message="Please enter a todo before submitting."
        />
      )}
      <form className="mt-12 flex gap-2" onSubmit={addTodoHandler}>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError(false);
          }}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500
                    border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add
        </button>
      </form>
    </>
  );
};
