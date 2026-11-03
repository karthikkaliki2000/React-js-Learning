import React, { useEffect, useRef, useState } from 'react'

const UseRefExampleOne = () => {
    const[name,setName]=useState("");
    const RenderedCount=useRef(1);
    useEffect(()=>{
        RenderedCount.current=RenderedCount.current+1;
    })
  return (
    <div>
    <h1>UseRefExampleOne</h1>
    <input type='text' name='name' id='name' onChange={(e)=>setName(e.target.value)}></input>
    <h3>Typing: {name}</h3>
    <h5>Component Rendered Count: {RenderedCount.current}</h5>
    </div>
  )
}

export default UseRefExampleOne