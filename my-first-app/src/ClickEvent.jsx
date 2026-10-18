import React from 'react'
function clickHandle(e,firstName){
    console.log(e);
    console.log(`Hello ${firstName}`);
}
const ClickEvent= () => {
  return (
    <div>
    <button className='click-btn' onClick={(e)=>{return clickHandle(e,"Karthik")}}>Click Me</button>
    </div>
  )
}

export default ClickEvent;

