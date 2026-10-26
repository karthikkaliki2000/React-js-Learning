import React, { use, useEffect, useState } from 'react'

const UseEffectPracticeOne = () => {

    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Hi Im from useEffect practice one"+count);
    })
  return (
    <div>UseEffectPracticeOne
    
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    
    </div>
  )
}

export default UseEffectPracticeOne