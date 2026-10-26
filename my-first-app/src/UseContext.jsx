import React, { useContext } from 'react';
import { MainDataContext } from './context/MainContext';

const UseContext = () => {
    const { name, email } = useContext(MainDataContext);
    
    return (
        <div>
            <h1>Use Context</h1>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
};

export default UseContext;
