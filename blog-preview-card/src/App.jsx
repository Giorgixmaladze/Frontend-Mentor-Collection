import { useState } from 'react';
function App() {

  return (
    <div className='w-full h-full bg-yellow flex items-center justify-center'>
      <div className='w-110 h-9/12 bg-white rounded-2xl shadow-new flex flex-col items-center gap-3'>
      <div className='flex justify-center h-70 items-center'>
        <img src="public/card.png" className='w-100 h-60' alt="" />
      </div>
      <div className='w-100 flex flex-col gap-4'>
        <button className='bg-yellow border-0 w-30 h-10 font-bold rounded-lg '>Learning</button>
        <p className='text-xl'>Published 21 Dec 2023</p>
        <h1 className='text-3xl font-bold'>HTML & CSS foundations</h1>
        <p className='text-gray-700 text-xl'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <span className='flex gap-2.5 items-center'>
          <img className='w-12' src="public/userpic.png"/>
          <p className='font-bold'>Greg Hooper</p>
        </span>
      </div>
      </div>
      
    </div>
  )
}

export default App
