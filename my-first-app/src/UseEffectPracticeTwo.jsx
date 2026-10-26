import React, { useEffect, useState } from 'react'

const UseEffectPracticeTwo = () => {
 const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        console.log("Only executed when dependencies changes")
    },[toggle])

  return (
    <div>
    <button onClick={()=>setToggle(!toggle)}><h1>{toggle?"Off":"On"}</h1></button>
    </div>
  )
}

export default UseEffectPracticeTwo