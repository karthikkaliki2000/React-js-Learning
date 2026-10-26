import React, { useReducer } from 'react';

// 1. Best Practice: Keep static data and reducer functions outside the component 
// so they don't get recreated on every single render pass.
const initialData = [
  {
    id: "uhuh",
    name: "karthik",
    email: "karthik@gmaul.com"
  },
  {
    id: "uhkmkuh",
    name: "ram",
    email: "ram@gmaul.com"
  }
];

const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    return state.filter((eachPerson) => eachPerson.id !== action.payload);
  }
  // 2. Critical: Always return current state as a fallback if no actions match
  return state; 
};

const UseReducerExampleOne = () => {
  // 3. Corrected hook signature layout here
  const [state, dispatch] = useReducer(reducer, initialData);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };

  return (
    <div>
      <h1>UseReducerExampleOne</h1>
      {
        state.map((eachObj) => {
          const { id, name, email } = eachObj;
          
          return (
            <div key={id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{name}</h3>
              <p>{email}</p>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
}; // <--- 4. Added the missing closing curly brace for the component function

export default UseReducerExampleOne;
