import React, { useState } from 'react'

let initialArray = [
    { id: 1, name: "Karthik", city: "Nellore" },
    { id: 2, name: "Ram", city: "Ayodhya" },
    { id: 3, name: "Ganesh", city: "Kailash" },
    { id: 4, name: "Krish", city: "Dwaraka" }
]

const DelProfile = () => {
    const [data, setData] = useState(initialArray);

    const handleDelete = (targetId) => {
        // ✅ Best practice: filter the array keeping only objects whose id doesn't match the targetId
        setData((prevData) => prevData.filter((item) => item.id !== targetId));
    };

  return (
    <div className='usestatecontainer'>
       <ul>
         {
         
          data.map((eachObj, index) => {
           
            const { id, name, city } = eachObj;
            
            return (
              <li key={id}> {/* ✅ Best practice: use the unique 'id' as the key instead of array 'index' */}
                <div>ID: {id}</div>
                <div>Name: {name}</div>
                <div>City: {city}</div>
                
               
                <button onClick={() => handleDelete(id)}>Delete</button>
              </li>
            );
          })
         }
       </ul>
    </div>
  )
}

export default DelProfile;
