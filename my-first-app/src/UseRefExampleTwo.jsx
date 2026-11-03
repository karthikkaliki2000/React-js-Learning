import React, { useEffect, useRef, useState } from 'react'

const UseRefExampleTwo = () => {
    const[name,setName]=useState("");
    const ref=useRef(1);
   useEffect(()=>{
    console.log(ref);
   })

    const focus=()=>{
        ref.current.focus();
        ref.current.value="Some Text",
        setName("Some Text");
    }
  return (
    <div>
    <h1>UseRefExampleTwo</h1>
    <input ref={ref} type='text' name='name' id='name' onChange={(e)=>setName(e.target.value)}></input>
    <h3>Typing: {name}</h3>
    <button onClick={focus}>Focus On Input</button>
   
    </div>
  )
}

export default UseRefExampleTwo