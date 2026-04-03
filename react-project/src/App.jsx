import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Task from './components/Task';

function App() {
  const [singleTask, setSingleTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted", singleTask);
    if (singleTask.trim() !== "") {
      setTaskArray(prev => [...prev, singleTask]);
      setSingleTask("");
    }else{
      alert("Please enter a task before submitting.");
    }
  };
  console.log(taskArray,'taskArray');
  return (
    <>
      <div className="flex justify-center w-full h-screen bg-black text-white">
        <div className="flex flex-col align-top mt-5 p-5 gap-5">
          <h1 className='text-2xl font-bold text-center'>Todo List</h1>
          <div className='flex flex-col bg-gray-300 p-5 rounded-lg gap-5'>
            <form className='p-2 rounded-lg bg-white text-gray-600' onSubmit={handleTaskSubmit}>
              <input
                value={singleTask}
                onChange={(e) => setSingleTask(e.target.value)}
                className='rounded-lg text-black border-none'
                type="text" placeholder='Add a task'
              />
              <button type="submit" className='p-1 rounded-lg bg-cyan-900 text-white'>Add</button>
            </form>
            <div className='flex flex-col gap-2'>
              {/* <Task /> */}
            </div>
          </div>
          {/* <Card img="/src/assets/img.png" title={'Class Warfare'} subtitle={'The Anti-Patterns'} year={2025}/>
          <Card img="/src/assets/img.png" title={'Class Warfare'} subtitle={'The Anti-Patterns'} year={2025}/> */}
        </div>
      </div>
    </>
  );
}

export default App
