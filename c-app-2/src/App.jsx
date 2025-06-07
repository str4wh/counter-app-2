import React, { useState } from 'react'

function App() {

  const [count,setCount] = useState(0)

  function handleClick() {
    setCount (count + 1);
  }

  function handleReset() {
    setCount (0)
  }
  return (
    <div className='bg-red-300 flex flex-col justify-center items-center p-6 text-[18px] text-white'>
      <p>Click the button below</p>
      <button
      className='bg-red-600 p-6 border-0 rounded-full mt-6 mb-6' 
      onClick={handleClick}>
        Clicked {count} times
      </button>

      <button
      className='bg-red-600 p-6 border-0 rounded-full mt-6 mb-6' 
      onClick={handleReset}>
        Reset
      </button>
      
    </div>
  )
}

export default App