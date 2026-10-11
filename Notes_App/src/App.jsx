import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const formHandling = (e)=>{
    e.preventDefault();
    const newTask = [...task];
    newTask.push({title,details})

    setTask(newTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const newTask = [...task];
    newTask.splice(idx,1)
    setTask(newTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        formHandling(e)
      }} className='h-screen p-10 flex flex-col w-1/2 gap-4 lg:w-1/2'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input 
            className='px-5 py-2 rounded border-white border-2 outline-none font-medium' 
            type="text" 
            placeholder='Enter Notes Heading'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
          }}
          />

          <textarea 
            className='px-5 py-2 h-32 rounded border-white border-2 outline-none font-medium' 
            type="textarea" 
            placeholder='Write Details'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button className='px-5 py-2 rounded bg-white text-black active:scale-95 border-2 font-semibold outline-none'>Add Note</button> 
      </form>
      <div className='p-10 border-l-2 border-white bg-black lg:w-1/2'>
        <h1 className='text-3xl font-bold text-white mb-4'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start h-[90%] overflow-auto gap-5 '>
          {task.map(function(elem, idx){
            return <div key={idx} className='flex flex-col justify-between h-70 w-55 text-black rounded-2xl px-8 pt-8 pb-6 bg-cover bg-[url(https://img.magnific.com/premium-vector/simple-vector-yellow-note-pad-page_519469-5009.jpg?semt=ais_hybrid&w=740&q=80)]'>
              <div>
                <h3 className='text-2xl font-bold leading-tight w-full'>{elem.title}</h3>
                <p className='text-xl font-bold text-gray-700 mt-4 leading-tight'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-red-500 text-white active:scale-95 font-bold px-6 py-2 rounded w-full'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
