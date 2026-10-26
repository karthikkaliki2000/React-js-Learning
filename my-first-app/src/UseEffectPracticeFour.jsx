import React, { useEffect, useState } from 'react'

const URL='https://jsonplaceholder.typicode.com/users';
const UseEffectPracticeFour = () => {

  const[userData,setUserData]=useState([]);   
  const[loading,setLoading]=useState(false);
  const[isError,setIsError]=useState({
    status:false,
    msg:"",
  });


  const fetchUsers=async (url)=>{
    setLoading(true);
    setIsError({status:false,msg:""})
     try {

       const response=await fetch(url);
   const jsonResponse=await response.json();
    setUserData(jsonResponse);
    setLoading(false);
    setIsError({status:false,msg:""})
      if(response.status===404){
        throw new Error("data not found");
      }
     } catch (error) {
      setIsError({status:true,msg:error.msg || "Something went wrong! Please try again later"})
     }

}

   useEffect(()=>{
    fetchUsers(URL);
   },[])


   if(loading){
    return(<div><h3>Loading...</h3></div>);
   }

   if(isError?.isError){
    return(<div><h3 style={{color:'red'}}>{isError?.msg}</h3></div>);
   }

  return (
    <div>
    <h1>UseEffectPracticeFour</h1>

    <ul>
       {
        userData.map((eachUser)=>{
           const {id,name,email}=eachUser;
           return <li key={id}>
           <h5>{name}</h5>
           <h6>{email}</h6>
           </li>
        })
       }
    </ul>
    
    </div>
  )



  
}



export default UseEffectPracticeFour