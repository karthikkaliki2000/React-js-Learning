import React, { useEffect, useReducer, useState } from 'react';

const reducer = (state, action) => {
  if (action.type === "UPDATE_USERS_DATA") {
    return { ...state, users: action.payload };
  }
  if (action.type === "LOADING") {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === "ERROR") {
    return { ...state, isError: action.payload };
  }
  if (action.type === "DELETE_USER") {
    // FIX: Map filtered array back to 'users'
    const filteredUsers = state.users.filter((eachUser) => eachUser.id !== action.payload);
    return { ...state, users: filteredUsers };
  }
  if (action.type === "ONCLICK_EDIT") {
    return { ...state, isEditing: action.payload };
  }
  if (action.type === "UPDATE_USER") {
    // FIX: Read from and write back to 'users'
    const updatedUsers = state.users.map((eachUser) => {
      if (eachUser.id === action.payload.id) {
        return {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        };
      }
      return eachUser;
    });
    return { ...state, users: updatedUsers };
  }
  return state;
};

const initialState = {
  users: [],
  isLoading: false,
  isError: { status: false, msg: "" },
  isEditing: { status: false, id: "", name: "", email: "" },
};

const UseReducerExampleTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async (url) => {
    try {
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
      dispatch({ type: "LOADING", payload: true });
      const response = await fetch(url);
      const jsonResponse = await response.json();
      dispatch({ type: "UPDATE_USERS_DATA", payload: jsonResponse });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: true, msg: error.message } });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleEdit = (id) => {
    // FIX: Find the current user in state before dispatching
    const userToEdit = state.users.find((user) => user.id === id);
    if (userToEdit) {
      dispatch({
        type: "ONCLICK_EDIT",
        payload: {
          status: true,
          id: id,
          name: userToEdit.name,
          email: userToEdit.email,
        },
      });
    }
  };

  const updateData = (id, name, email) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { id, name, email },
    });
    dispatch({
      type: "ONCLICK_EDIT",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };

  useEffect(() => {
    fetchUsers("https://jsonplaceholder.typicode.com/users");
  }, []);

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  if (state.isError.status) {
    return <div>Error: {state.isError.msg}</div>;
  }

  return (
    <div>
      <h1>UseReducerExampleTwo</h1>
      <hr />
      {state.isEditing?.status && (
        <EditFormContainer
          id={state.isEditing.id}
          comingTitle={state.isEditing.name}
          comingEmail={state.isEditing.email}
          updateData={updateData}
        />
      )}
      {state.users.map((eachUser) => {
        const { id, name, email } = eachUser;
        return (
          <div key={id} style={{ background: "lightblue", border: "2px solid red", margin: "10px", padding: "10px" }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleEdit(id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

const EditFormContainer = ({ id, comingTitle, comingEmail, updateData }) => {
  const [title, setTitle] = useState(comingTitle || "");
  const [email, setEmail] = useState(comingEmail || "");

  // FIX: Reset local state when a different user is selected for editing
  useEffect(() => {
    setTitle(comingTitle);
    setEmail(comingEmail);
  }, [id, comingTitle, comingEmail]);

  const handleSubmit = (e) => {
    e.preventDefault(); // FIX: Prevents page reload
    updateData(id, title, email);
  };

  return (
    <div style={{ padding: "10px", background: "#f0f0f0", marginBottom: "15px" }}>
      <h3>Edit User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">update data</button>
      </form>
    </div>
  );
};

export default UseReducerExampleTwo;
