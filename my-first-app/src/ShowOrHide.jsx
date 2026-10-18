import React, { useState } from 'react'


const ShowOrHide = () => {
  let data="some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.";

    const [showData,setBoolean]=useState(false);

  return (
   
    <div className='usestatecontainer'>
     <button onClick={()=>{setBoolean(!showData)}}>{showData?"Hide":"Show"}</button>
       {showData && data}
    </div>
  )
}

export default ShowOrHide