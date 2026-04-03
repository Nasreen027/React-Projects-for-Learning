import { FaTrash } from "react-icons/fa";

function Task() {
    return (
        <>
            <div className='flex justify-between p-2 rounded-lg bg-cyan-50 text-white'>
                <span className='text-black'>Task 1</span>
                <button className='p-2 rounded-lg bg-cyan-900 text-white'><FaTrash /></button>
            </div>
        </>
    )
}

export default Task