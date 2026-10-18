import React, { useState } from 'react'


const UseStatePracticeOne = () => {

    const [count,setCount]=useState(0);


  return (
    <div className='usestatecontainer'>
         <button onClick={()=>setCount(count-1)}>-</button>
     {count}
         <button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
    </div>
  )
}

export default UseStatePracticeOne