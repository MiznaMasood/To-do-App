import React, { useState } from 'react'

const Test = () => {
    const[input,setInput] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(input)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input 
        
        type="text" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Test
