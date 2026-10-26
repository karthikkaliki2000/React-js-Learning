import React, { useState } from 'react'

const FormFill = () => {

    const[name,setName]=useState("");
     const[email,setEmail]=useState("");
      const[password,setPassword]=useState("");

    //   const handleName=(e)=>setName(e.target.value);
    //    const handleEmail=(e)=>setEmail(e.target.value);
    //     const handlePassword=(e)=>setPassword(e.target.value);

    const arr=[];

    const handleInput=(e,inputName)=>{
        if(inputName==="name"){
            setName(e.target.value);
        }
        else if(inputName==="email"){
            setEmail(e.target.value);
        }
        else if(inputName==="password"){
            setPassword(e.target.value);
        }
    }
         const handleSubmit=(e)=>{
            e.preventDefault();
            let userDetails={
                name:name,
                email:email,
                password:password
            }

            arr.push(userDetails);
            console.log(arr);
         }
  return (
    <div>

    <form className='formContainer' onSubmit={handleSubmit}>

    <div className='formcontent'>
    <span>Name:</span><input type='text' name='name'  id="name" placeholder='enter your name'  value={name} onChange={(e)=>handleInput(e,"name")}/>
    </div>
    <div className='formcontent'>
    <span>Email:</span><input type='email' name='email'  id="email" placeholder='enter your email'  value={email} onChange={(e)=>handleInput(e,"email")}/>
    </div>
    <div className='formcontent'>
    <span>Password:</span><input type='password' name='password'  id="password" placeholder='enter your password'  value={password} onChange={(e)=>handleInput(e,"password")}/>
    </div>
    <div className='formcontent'>
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    
    </form>
    
    
    </div>
  )
}

export default FormFill