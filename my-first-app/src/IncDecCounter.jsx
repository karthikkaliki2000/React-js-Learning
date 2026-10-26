import React, { useContext, useState } from 'react'


const IncDecCounter = () => {

    const [count,setCount]=useState(0);

  
  return (
    <div className='usestatecontainer'>
         <button onClick={()=>setCount(count-1)}>-</button>
     {count}
         <button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
    </div>
  )
}

export default IncDecCounter