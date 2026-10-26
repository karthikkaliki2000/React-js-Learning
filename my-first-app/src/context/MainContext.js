import React from "react";

const data = {
    name: "Karthik",
    email: "karthik@gmail.com"
};

export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({ children }) => {
    // Added 'return' here
    return (
        <MainDataContext.Provider value={data}>
            {children}
        </MainDataContext.Provider>
    );
};
