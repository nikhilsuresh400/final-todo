import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';

const MainPage = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prev) => [...prev, inputValue]);

        setInputValue("");
    }

    const deleteHandler = (index) => {
        setTask(task.filter((_, i) => i !== index));
    }

    return (
        <div className='border border-borderColor w-3/4 min-h-full h-[90vh] 
            mx-auto bg-bodyDark my-10 rounded-lg px-16 py-4 shadow-2xl'>
            <section
                className='flex flex-col items-center'>
                <h1 className='text-[3rem] font-semibold mb-8'>Todo WebApp</h1>
                {/* FORM STARTS */}
                <form
                    className='w-full flex items-center justify-center gap-4'>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                        type="text" placeholder='Enter your tasks...'
                        className='bg-transparent outline-none border border-borderColor px-6 py-3
                        rounded-lg w-3/4 focus:border-[#0230fda4] transition-all duration-160 ease-in-out'/>
                    <button type='submit' onClick={submitHandler}
                        className='bg-themeBlue px-6 py-3 font-semibold rounded-lg hover:bg-themeBlue/88
                            cursor-pointer transition-all duration-160 ease-in-out'>Add task</button>
                </form>
                {/* TASK LIST */}
                <div className='mt-12 w-full'>
                    <ul className='flex flex-col gap-5'>
                        {
                            task.map((task, index) =>
                                <li key={index} className='flex items-center gap-4 rounded-lg
                                    border border-borderColor bg-primaryDark px-4 py-2'>
                                    <span className='w-full'>{task}</span>
                                    <button>
                                        <MdDelete onClick={() => deleteHandler(index)}
                                            className='text-3xl text-primaryLight hover:text-red-600 cursor-pointer
                                                transition-all duration-160 ease-in-out'/>
                                    </button>
                                </li>
                            )}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default MainPage
